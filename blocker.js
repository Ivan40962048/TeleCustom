function run(){
	let chats = document.querySelector("#folders-container > div > div.chatlist-top > ul").childNodes;
	removeChatPreviews(chats);
	changeChatAvatars(chats);
}

function removeChatPreviews(chats) {
	chatIdsForRemovePreview = ["957483527", "1741221590", "5652056591", "504667562"];
	let searchedChat;
	for (let i = 0; i < chats.length; i++) {
		for (let k = 0; k < chatIdsForRemovePreview.length; k++) {
			if (chats[i].getAttribute("data-peer-id") == chatIdsForRemovePreview[k])
			{
				searchedChat = chats[i];
				searchedChat.querySelector("div.row-row.row-subtitle-row.dialog-subtitle > div.row-subtitle.no-wrap.dialog-subtitle-flex").remove();
			}
		}
	}
}

function changeChatAvatars(chats){
	let imageReplacements = {
		"957483527": "https://i.pinimg.com/564x/e0/9f/e8/e09fe8a8d4f25e12083117f8558df9f4.jpg",
		"1741221590": "https://i.pinimg.com/736x/cf/59/33/cf5933428ec1997fa4c671e35a400d46.jpg",
	};
	for (let i = 0; i < chats.length; i++) {
		let chatId = chats[i].getAttribute("data-peer-id");
		let avatar = chats[i].getElementsByClassName("avatar")[0];
		if (Object.keys(imageReplacements).includes(chatId))
		{
			avatar.innerHTML = '<img class="avatar-photo" decoding="async" ' +
			'src="' + imageReplacements[chatId] + '">';
		}
		else
		{
			avatar.innerHTML = '<img class="avatar-photo" decoding="async" ' +
			'src="https://i.pinimg.com/736x/a2/4d/d9/a24dd913965b66c8ff68d53cf899ce9e--game-creator-retro-gamer.jpg">';
		}
	}
}

const checkElement = async selector => {
	while (document.querySelector(selector) === null){
		await new Promise(resolve => requestAnimationFrame(resolve))
	}
	return document.querySelector(selector);
}

checkElement("#folders-container > div > div.chatlist-top > ul > a:nth-child(3) > div.c-ripple").then((selector) => run())