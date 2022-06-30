/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import { AuthorityScope, authorityScopeBeet } from '../types/AuthorityScope';

/**
 * @category Instructions
 * @category UpdateAuctioneer
 * @category generated
 */
export type UpdateAuctioneerInstructionArgs = {
  scopes: AuthorityScope[];
};
/**
 * @category Instructions
 * @category UpdateAuctioneer
 * @category generated
 */
export const updateAuctioneerStruct = new beet.FixableBeetArgsStruct<
  UpdateAuctioneerInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['scopes', beet.array(authorityScopeBeet)],
  ],
  'UpdateAuctioneerInstructionArgs',
);
/**
 * Accounts required by the _updateAuctioneer_ instruction
 *
 * @property [_writable_] auctionHouse
 * @property [_writable_, **signer**] authority
 * @property [] auctioneerAuthority
 * @property [_writable_] ahAuctioneerPda
 * @category Instructions
 * @category UpdateAuctioneer
 * @category generated
 */
export type UpdateAuctioneerInstructionAccounts = {
  auctionHouse: web3.PublicKey;
  authority: web3.PublicKey;
  auctioneerAuthority: web3.PublicKey;
  ahAuctioneerPda: web3.PublicKey;
  systemProgram?: web3.PublicKey;
};

export const updateAuctioneerInstructionDiscriminator = [103, 255, 80, 234, 94, 56, 168, 208];

/**
 * Creates a _UpdateAuctioneer_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category UpdateAuctioneer
 * @category generated
 */
export function createUpdateAuctioneerInstruction(
  accounts: UpdateAuctioneerInstructionAccounts,
  args: UpdateAuctioneerInstructionArgs,
  programId = new web3.PublicKey('hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk'),
) {
  const [data] = updateAuctioneerStruct.serialize({
    instructionDiscriminator: updateAuctioneerInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.auctionHouse,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.authority,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.auctioneerAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.ahAuctioneerPda,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
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
