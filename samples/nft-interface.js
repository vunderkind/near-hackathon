// The base structure that will be returned for a token. If contract is using
// extensions such as Approval Management, Metadata, or other
// attributes may be included in this structure.
type Token = {
  id: string,
  owner_id: string,
}

/******************/
/* CHANGE METHODS */
/******************/

// Simple transfer. Transfer a given `token_id` from current owner to
// `receiver_id`.
//
// Requirements
// * Caller of the method must attach a deposit of 1 yoctoⓃ for security purposes
// * Contract MUST panic if called by someone other than token owner or,
//   if using Approval Management, one of the approved accounts
// * `approval_id` is for use with Approval Management extension, see
//   that document for full explanation.
// * If using Approval Management, contract MUST nullify approved accounts on
//   successful transfer.
//
// Arguments:
// * `receiver_id`: the valid NEAR account receiving the token
// * `token_id`: the token to transfer
// * `approval_id`: expected approval ID. A number smaller than
//    2^53, and therefore representable as JSON. See Approval Management
//    standard for full explanation.
// * `memo` (optional): for use cases that may benefit from indexing or
//    providing information for a transfer
function nft_transfer(
  receiver_id: string,
  token_id: string,
  approval_id: number|null,
  memo: string|null,
) {}

// Returns `true` if the token was transferred from the sender's account.

// Transfer token and call a method on a receiver contract. A successful
// workflow will end in a success execution outcome to the callback on the NFT
// contract at the method `nft_resolve_transfer`.
//
// You can think of this as being similar to attaching native NEAR tokens to a
// function call. It allows you to attach any Non-Fungible Token in a call to a
// receiver contract.
//
// Requirements:
// * Caller of the method must attach a deposit of 1 yoctoⓃ for security
//   purposes
// * Contract MUST panic if called by someone other than token owner or,
//   if using Approval Management, one of the approved accounts
// * The receiving contract must implement `nft_on_transfer` according to the
//   standard. If it does not, FT contract's `nft_resolve_transfer` MUST deal
//   with the resulting failed cross-contract call and roll back the transfer.
// * Contract MUST implement the behavior described in `nft_resolve_transfer`
// * `approval_id` is for use with Approval Management extension, see
//   that document for full explanation.
// * If using Approval Management, contract MUST nullify approved accounts on
//   successful transfer.
//
// Arguments:
// * `receiver_id`: the valid NEAR account receiving the token.
// * `token_id`: the token to send.
// * `approval_id`: expected approval ID. A number smaller than
//    2^53, and therefore representable as JSON. See Approval Management
//    standard for full explanation.
// * `memo` (optional): for use cases that may benefit from indexing or
//    providing information for a transfer.
// * `msg`: specifies information needed by the receiving contract in
//    order to properly handle the transfer. Can indicate both a function to
//    call and the parameters to pass to that function.
function nft_transfer_call(
  receiver_id: string,
  token_id: string,
  approval_id: number|null,
  memo: string|null,
  msg: string,
): Promise {}


/****************/
/* VIEW METHODS */
/****************/

// Returns the token with the given `token_id` or `null` if no such token.
function nft_token(token_id: string): Token|null {}
