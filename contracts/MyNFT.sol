// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721A, Ownable {
    mapping(uint256 => string) private _prompts;
    mapping(uint256 => string) private _tokenURIs;
    constructor() ERC721A("MyNFT", "MNFT") Ownable(msg.sender) {}

    function createNFTs(string[] memory tokenURIs, string[] memory prompts) public onlyOwner {
        require(tokenURIs.length == prompts.length, "Mismatched inputs");
        uint256 startTokenId = _totalMinted();
        uint256 length = tokenURIs.length;

        _safeMint(msg.sender, length);

        for (uint256 i = 0; i < length; i++) {
            _prompts[startTokenId + i] = prompts[i];
            _tokenURIs[startTokenId + i] = tokenURIs[i];
        }
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "URI query for nonexistent token");
        return _tokenURIs[tokenId];
    }

    function promptDescription(uint256 tokenId) public view returns (string memory) {
        return _prompts[tokenId];
    }
}
