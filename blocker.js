function removeElements() {
	chatIdsForRemove = ["957483527", "1741221590", "5652056591"];
	let chats = document.querySelector("#folders-container > div > div.chatlist-top > ul").childNodes;
	let searchedChat;
	for (let k = 0; k < chatIdsForRemove.length; k++) {
		for (let i = 0; i < chats.length; i++) {
			if (chats[i].getAttribute("data-peer-id") == chatIdsForRemove[k])
			{
				searchedChat = chats[i];
				searchedChat.querySelector("div.row-row.row-subtitle-row.dialog-subtitle > div.row-subtitle.no-wrap.dialog-subtitle-flex").remove();
			}
		}
	}
}

setTimeout(removeElements, 3000);