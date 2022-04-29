use crate::{CandyError, CandyMachine, CandyMachineData};
use anchor_lang::prelude::*;

/// Update the candy machine state.
#[derive(Accounts)]
pub struct UpdateCandyMachine<'info> {
    #[account(
    mut,
    has_one = authority
    )]
    candy_machine: Account<'info, CandyMachine>,
    authority: Signer<'info>,
    /// CHECK: wallet can be any account and is not written to or read
    wallet: UncheckedAccount<'info>,
}

pub fn handle_update_authority(
    ctx: Context<UpdateCandyMachine>,
    new_authority: Option<Pubkey>,
) -> Result<()> {
    let candy_machine = &mut ctx.accounts.candy_machine;

    if let Some(new_auth) = new_authority {
        candy_machine.authority = new_auth;
    }

    Ok(())
}

pub fn handle_update_candy_machine(
    ctx: Context<UpdateCandyMachine>,
    data: CandyMachineData,
) -> Result<()> {
    let candy_machine = &mut ctx.accounts.candy_machine;

    if data.items_available != candy_machine.data.items_available && data.hidden_settings.is_none()
    {
        return err!(CandyError::CannotChangeNumberOfLines);
    }

    if candy_machine.data.items_available > 0
        && candy_machine.data.hidden_settings.is_none()
        && data.hidden_settings.is_some()
    {
        return err!(CandyError::CannotSwitchToHiddenSettings);
    }

    candy_machine.wallet = ctx.accounts.wallet.key();
    candy_machine.data = data;

    if !ctx.remaining_accounts.is_empty() {
        candy_machine.token_mint = Some(ctx.remaining_accounts[0].key())
    } else {
        candy_machine.token_mint = None;
    }
    Ok(())
}
