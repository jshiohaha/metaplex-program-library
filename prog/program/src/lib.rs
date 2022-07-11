use anchor_lang::prelude::*;

declare_id!("7nfZGjy2LXjh9fcW7dQEGrpy2vcRW2Hkjm7vfLXW4vtW");

#[program]
pub mod prog {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
