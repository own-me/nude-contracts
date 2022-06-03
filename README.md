# nude-contracts

Solidity contracts for the $NUDE and $NUDENFT tokens which powers Own Me's adult content NFT community!
Built on Polygon network with Hardhat and Openzepplin.

### NUDE - MATIC(ERC20) Token

Used as the in-app currency for all transactions.

### NUDE_NFT - MATIC(ERC721) Token

Used to store a creator's content as a non-fungible item.

## Contract Addresses

### Polygon Mumbai - testnet

`NUDE`: [0x2dE8A5ee0Ac45C281BC7438F2105F44db8A967f5](https://mumbai.polygonscan.com/address/0x2dE8A5ee0Ac45C281BC7438F2105F44db8A967f5)

`NUDE_NFT`: [0xE28B6FcD077E9Bbaf310aD24e9A9de4118A13aaC](https://mumbai.polygonscan.com/address/0xE28B6FcD077E9Bbaf310aD24e9A9de4118A13aaC)

`NUDE_DEX`: [0x72a05114e0e57Ec5BE8b47638B01DE1f0E476F11](https://mumbai.polygonscan.com/address/0x72a05114e0e57Ec5BE8b47638B01DE1f0E476F11)

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
