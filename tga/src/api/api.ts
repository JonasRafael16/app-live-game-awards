
const baseApiURL = '192.168.0.2:8080/api/';

export async function clientGetGames() {
  const response = await fetch(`${baseApiURL}games`);
  const json = await response.json();

  return json;
}

export async function clientSendingVotes(id: number) {
  const requestOption = {
    method: 'patch'
  };
  fetch(`${baseApiURL}game/${id}/vote`, requestOption)
  .then( response => response.text())
  .then( result => console.log(result))
  .catch( error => console.log('error', error));
}

export async function clientGetWinner() {
  const response = await fetch(`${baseApiURL}games`)
  const json = await response.json()

  return json;
}

