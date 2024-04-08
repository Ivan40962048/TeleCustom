function removeElements() {
	chatIdsForRemove = ["957483527", "1741221590", "5652056591"];
	let chats = document.querySelector("#folders-container > div > div.chatlist-top > ul").childNodes;
	let searchedChat;
	for (let i = 0; i < chats.length; i++) {
		let chatImages = chats[i].getElementsByTagName("img");
		if (chatImages.length > 0)
			chatImages[chatImages.length - 1].src = "https://i.pinimg.com/736x/a2/4d/d9/a24dd913965b66c8ff68d53cf899ce9e--game-creator-retro-gamer.jpg";

		for (let k = 0; k < chatIdsForRemove.length; k++) {
			if (chats[i].getAttribute("data-peer-id") == chatIdsForRemove[k])
			{
				searchedChat = chats[i];
				searchedChat.querySelector("div.row-row.row-subtitle-row.dialog-subtitle > div.row-subtitle.no-wrap.dialog-subtitle-flex").remove();
			}
		}
	}
}

setTimeout(removeElements, 3000);