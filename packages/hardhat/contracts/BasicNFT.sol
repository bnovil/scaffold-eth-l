// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7; //Do not change the solidity version as it negativly impacts submission grading

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract BasicNFT is ERC721 {
	string public constant TOKEN_URI =
		"https://cn.bing.com/images/search?view=detailV2&ccid=pR8Z%2ffje&id=EFF6813166D6FC72D9B8683EF1348DB1E810C9E4&thid=OIP.pR8Z_fje67TCgSj0g_5bMwHaEi&mediaurl=https%3a%2f%2fcdn.wallpaper.com%2fmain%2flegacy%2fgallery%2f17056799%2f05_Doggy_Style.jpg&exph=944&expw=1540&q=doggy+style&simid=608024686557096995&FORM=IRPRST&ck=BD331E495623FA7C58B458A4EE3CFDC9&selectedIndex=0";

	uint256 private s_tokenCounter;

	constructor() ERC721("Dogie", "DOG") {}

	function mintNFT() public returns (uint256) {
		_safeMint(msg.sender, s_tokenCounter);
		s_tokenCounter++;
		return s_tokenCounter;
	}

	function getTokenCounter() public view returns (uint256) {
		return s_tokenCounter;
	}

	function tokenURI(
		uint256 tokenId
	) public view virtual override returns (string memory) {
		return TOKEN_URI;
	}
}
