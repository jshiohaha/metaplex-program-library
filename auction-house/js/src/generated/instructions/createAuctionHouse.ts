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
 * @category CreateAuctionHouse
 * @category generated
 */
export type CreateAuctionHouseInstructionArgs = {
  bump: number;
  feePayerBump: number;
  treasuryBump: number;
  sellerFeeBasisPoints: number;
  requiresSignOff: boolean;
  canChangeSalePrice: boolean;
};
/**
 * @category Instructions
 * @category CreateAuctionHouse
 * @category generated
 */
export const createAuctionHouseStruct = new beet.BeetArgsStruct<
  CreateAuctionHouseInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['bump', beet.u8],
    ['feePayerBump', beet.u8],
    ['treasuryBump', beet.u8],
    ['sellerFeeBasisPoints', beet.u16],
    ['requiresSignOff', beet.bool],
    ['canChangeSalePrice', beet.bool],
  ],
  'CreateAuctionHouseInstructionArgs',
);
/**
 * Accounts required by the _createAuctionHouse_ instruction
 *
 * @property [] treasuryMint
 * @property [_writable_, **signer**] payer
 * @property [] authority
 * @property [_writable_] feeWithdrawalDestination
 * @property [_writable_] treasuryWithdrawalDestination
 * @property [] treasuryWithdrawalDestinationOwner
 * @property [_writable_] auctionHouse
 * @property [_writable_] auctionHouseFeeAccount
 * @property [_writable_] auctionHouseTreasury
 * @category Instructions
 * @category CreateAuctionHouse
 * @category generated
 */
export type CreateAuctionHouseInstructionAccounts = {
  treasuryMint: web3.PublicKey;
  payer: web3.PublicKey;
  authority: web3.PublicKey;
  feeWithdrawalDestination: web3.PublicKey;
  treasuryWithdrawalDestination: web3.PublicKey;
  treasuryWithdrawalDestinationOwner: web3.PublicKey;
  auctionHouse: web3.PublicKey;
  auctionHouseFeeAccount: web3.PublicKey;
  auctionHouseTreasury: web3.PublicKey;
  tokenProgram?: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  ataProgram?: web3.PublicKey;
  rent?: web3.PublicKey;
};

export const createAuctionHouseInstructionDiscriminator = [221, 66, 242, 159, 249, 206, 134, 241];

/**
 * Creates a _CreateAuctionHouse_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category CreateAuctionHouse
 * @category generated
 */
export function createCreateAuctionHouseInstruction(
  accounts: CreateAuctionHouseInstructionAccounts,
  args: CreateAuctionHouseInstructionArgs,
  programId = new web3.PublicKey('hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk'),
) {
  const [data] = createAuctionHouseStruct.serialize({
    instructionDiscriminator: createAuctionHouseInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.treasuryMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.authority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.feeWithdrawalDestination,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.treasuryWithdrawalDestination,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.treasuryWithdrawalDestinationOwner,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.auctionHouse,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.auctionHouseFeeAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.auctionHouseTreasury,
      isWritable: true,
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
      pubkey: accounts.ataProgram ?? splToken.ASSOCIATED_TOKEN_PROGRAM_ID,
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
