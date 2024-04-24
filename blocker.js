function run(){
	let chats = document.querySelector("#folders-container > div > div.chatlist-top > ul").childNodes;
	removeChatPreviews(chats);
	changeChatAvatars(chats);
}

function removeChatPreviews(chats) {
	chatIdsForRemove = ["957483527", "1741221590", "5652056591", "504667562"];
	let searchedChat;
	for (let i = 0; i < chats.length; i++) {
		for (let k = 0; k < chatIdsForRemove.length; k++) {
			if (chats[i].getAttribute("data-peer-id") == chatIdsForRemove[k])
			{
				searchedChat = chats[i];
				searchedChat.querySelector("div.row-row.row-subtitle-row.dialog-subtitle > div.row-subtitle.no-wrap.dialog-subtitle-flex").remove();
			}
		}
	}
}

function changeChatAvatars(chats){
	for (let i = 0; i < chats.length; i++) {
		let avatar = chats[i].getElementsByClassName("avatar")[0];
		avatar.innerHTML = '<img class="avatar-photo" decoding="async" ' +
		'src="https://i.pinimg.com/736x/a2/4d/d9/a24dd913965b66c8ff68d53cf899ce9e--game-creator-retro-gamer.jpg">';
	}
}

const checkElement = async selector => {
	while (document.querySelector(selector) === null){
		await new Promise(resolve => requestAnimationFrame(resolve))
	}
	return document.querySelector(selector);
}

checkElement("#folders-container > div > div.chatlist-top > ul > a:nth-child(3) > div.c-ripple").then((selector) => run())