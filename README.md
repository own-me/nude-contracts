# nude-contracts

Solidity contracts for the $NUDE and $NUDENFT tokens which powers Own Me's adult content NFT community!
Built on Polygon network with Hardhat and Openzepplin.

### NUDE - MATIC(ERC20) Token

Used as the in-app currency for all transactions.

### NUDE_NFT - MATIC(ERC721) Token

Used to store a creator's content as a non-fungible item.

### NUDE_DEX - MATIC(IERC721Receiver) Contract

Our NFT exchange contract.

## Contract Addresses

### Polygon Mumbai - testnet

`NUDE`: [0xDca8383B473304C316f35fD6666B9f5D03FC69B3](https://mumbai.polygonscan.com/address/0xDca8383B473304C316f35fD6666B9f5D03FC69B3)

`NUDE_NFT`: [0x46134236bF7c53E2C520B4d86cBfa267834d06Dc](https://mumbai.polygonscan.com/address/0x46134236bF7c53E2C520B4d86cBfa267834d06Dc)

`NUDE_DEX`: [0xFA4b4B968Db83F1c8326204E53998422118AC75F](https://mumbai.polygonscan.com/address/0xFA4b4B968Db83F1c8326204E53998422118AC75F)

## Dev Setup

1.) `npm install`

2.) Create an `.env` file and add your own secrets. `.env.example` is a template.

## Compile

`npm run compile`

## Deploy

`npm run deploy`

## Verify

1.) `npx hardhat verify --network polygonMumbai <DEPLOYED_NUDE_CONTRACT>`

2.) `npx hardhat verify --network polygonMumbai <DEPLOYED_NUDE_NFT_CONTRACT>`

3.) `npx hardhat verify --network polygonMumbai <DEPLOYED_NUDE_DEX_CONTRACT> <DEPLOYED_NUDE_CONTRACT> <DEPLOYED_NUDE_NFT_CONTRACT>`

## Join our Community

![Navbar](https://user-images.githubusercontent.com/27584221/137842947-f80ab90a-cbba-4382-b729-dfb94e0e32f0.png)

https://ownme.io/

[Twitter](https://twitter.com/own_me_nft)

[Discord](https://discord.gg/Ww5nckNGpS)

[Telegram](https://t.me/own_me_nft)

[Instagram](https://www.instagram.com/own_me_nft/)

[Reddit](https://www.reddit.com/r/OwnMeNFT/)

[Medium](https://medium.com/@own.me.nft)

[Substack](https://ownme.substack.com/)

## Rules / Code of Conduct

1. Absolutely no adult content, nude content or pornography is allowed to be commited to Github. We only publish clean code.
