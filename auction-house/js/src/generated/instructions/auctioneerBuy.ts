/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token';
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category AuctioneerBuy
 * @category generated
 */
export type AuctioneerBuyInstructionArgs = {
  tradeStateBump: number;
  escrowPaymentBump: number;
  buyerPrice: beet.bignum;
  tokenSize: beet.bignum;
};
/**
 * @category Instructions
 * @category AuctioneerBuy
 * @category generated
 */
export const auctioneerBuyStruct = new beet.BeetArgsStruct<
  AuctioneerBuyInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['tradeStateBump', beet.u8],
    ['escrowPaymentBump', beet.u8],
    ['buyerPrice', beet.u64],
    ['tokenSize', beet.u64],
  ],
  'AuctioneerBuyInstructionArgs',
);
/**
 * Accounts required by the _auctioneerBuy_ instruction
 *
 * @property [**signer**] wallet
 * @property [_writable_] paymentAccount
 * @property [] transferAuthority
 * @property [] treasuryMint
 * @property [] tokenAccount
 * @property [] metadata
 * @property [_writable_] escrowPaymentAccount
 * @property [] authority
 * @property [**signer**] auctioneerAuthority
 * @property [] auctionHouse
 * @property [_writable_] auctionHouseFeeAccount
 * @property [_writable_] buyerTradeState
 * @property [] ahAuctioneerPda
 * @category Instructions
 * @category AuctioneerBuy
 * @category generated
 */
export type AuctioneerBuyInstructionAccounts = {
  wallet: web3.PublicKey;
  paymentAccount: web3.PublicKey;
  transferAuthority: web3.PublicKey;
  treasuryMint: web3.PublicKey;
  tokenAccount: web3.PublicKey;
  metadata: web3.PublicKey;
  escrowPaymentAccount: web3.PublicKey;
  authority: web3.PublicKey;
  auctioneerAuthority: web3.PublicKey;
  auctionHouse: web3.PublicKey;
  auctionHouseFeeAccount: web3.PublicKey;
  buyerTradeState: web3.PublicKey;
  ahAuctioneerPda: web3.PublicKey;
  tokenProgram?: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  rent?: web3.PublicKey;
};

export const auctioneerBuyInstructionDiscriminator = [17, 106, 133, 46, 229, 48, 45, 208];

/**
 * Creates a _AuctioneerBuy_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category AuctioneerBuy
 * @category generated
 */
export function createAuctioneerBuyInstruction(
  accounts: AuctioneerBuyInstructionAccounts,
  args: AuctioneerBuyInstructionArgs,
  programId = new web3.PublicKey('hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk'),
) {
  const [data] = auctioneerBuyStruct.serialize({
    instructionDiscriminator: auctioneerBuyInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.wallet,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.paymentAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.transferAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.treasuryMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenAccount,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.metadata,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.escrowPaymentAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.authority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.auctioneerAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.auctionHouse,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.auctionHouseFeeAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.buyerTradeState,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.ahAuctioneerPda,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
