use {
    crate::{
        pod::{PodAccountInfo, PodBool},
        zk_token_elgamal,
    },
    bytemuck::{Pod, Zeroable},
    num_derive::{
        FromPrimitive,
        ToPrimitive,
    },
    solana_program::pubkey::Pubkey,
};

pub const PREFIX: &str = "metadata";
pub const TRANSFER: &str = "transfer";

pub const MAX_URI_LENGTH: usize = 100;
pub const MAX_METADATA_LEN: usize
    = 8                     // discriminator
    + 32                    // mint
    + 32                    // elgamal pubkey
    + MAX_URI_LENGTH        // uri
    ;

#[derive(Clone, Copy, PartialEq, FromPrimitive, ToPrimitive)]
#[repr(u8)]
pub enum Key {
    Uninitialized,
    StealthAccountV1,
    CipherKeyTransferBufferV1,
    EncryptionKeyBufferV1,
}

#[derive(Clone, Copy, PartialEq, FromPrimitive, ToPrimitive)]
#[repr(u8)]
pub enum OversightMethod {
    Uninitialized,
    None,
    Freeze,
}

// wcgw
unsafe impl Zeroable for Key {}
unsafe impl Zeroable for OversightMethod {}
unsafe impl Pod      for Key {}
unsafe impl Pod      for OversightMethod {}

#[derive(Clone, Copy)]
#[repr(C)]
pub struct URI(pub [u8; MAX_URI_LENGTH]);

unsafe impl Zeroable for URI {}
unsafe impl Pod for URI {}

/// Account data
#[derive(Clone, Copy, Pod, Zeroable)]
#[repr(C)]
pub struct StealthAccount {
    pub key: Key,

    /// The corresponding SPL Token Mint
    pub mint: Pubkey,

    /// The signing key associated with `elgamal_pk`
    pub wallet_pk: Pubkey,

    /// The public key associated with ElGamal encryption
    pub elgamal_pk: zk_token_elgamal::pod::ElGamalPubkey,

    /// 192-bit AES cipher key encrypted with elgamal_pk
    pub encrypted_cipher_key: zk_token_elgamal::pod::ElGamalCiphertext,

    /// TODO: optional auditor pk and cipher key

    /// URI of encrypted asset
    pub uri: URI,

    pub method: OversightMethod,

    pub bump_seed: u8,

    pub padding: [u8; 128],
}
impl PodAccountInfo<'_, '_> for StealthAccount {}

#[derive(Clone, Copy, Pod, Zeroable)]
#[repr(C)]
pub struct CipherKeyTransferBuffer {
    pub key: Key,

    pub updated: PodBool,

    /// Account that will have its encrypted key updated
    pub stealth_key: Pubkey,

    /// The destination signing key associated with `elgamal_pk`
    pub wallet_pk: Pubkey,

    /// Destination public key
    pub elgamal_pk: zk_token_elgamal::pod::ElGamalPubkey,

    /// 192-bit AES cipher key encrypted with elgamal_pk
    pub encrypted_cipher_key: zk_token_elgamal::pod::ElGamalCiphertext,

    pub padding: [u8; 128],
}
impl PodAccountInfo<'_, '_> for CipherKeyTransferBuffer {}

#[derive(Clone, Copy, Pod, Zeroable)]
#[repr(C)]
pub struct EncryptionKeyBuffer {
    pub key: Key,

    /// Wallet Key for this buffer
    pub owner: Pubkey,

    /// Stealth NFT mint
    pub mint: Pubkey,

    /// ElGamal encryption key associated with owner:mint
    pub elgamal_pk: zk_token_elgamal::pod::ElGamalPubkey,

    pub padding: [u8; 64],
}
impl PodAccountInfo<'_, '_> for EncryptionKeyBuffer {}