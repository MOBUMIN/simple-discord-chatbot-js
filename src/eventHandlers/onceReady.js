import isUp from 'is-up';

async function onceReady(client) {
  console.log("onceReady!");

  setInterval(async () => {
    checkWebStatus(client);
  }, 5 * 1000); // 5초에 한 번
}

const url = "https://chatops-bot-test-20210226.taeuk.workers.dev/";
const channelId = "814801307918925886";
async function checkWebStatus(client) {
	if (await isUp(url)) {
		console.log("정상 작동중...");
	} else {
		console.log("웹사이트 비정상 작동!");
		client.channels.cache.get(channelId).send("🤷‍♀️웹사이트 접속이 안 돼~");
	}
}

export default onceReady;
