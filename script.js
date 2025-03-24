function generateResponse() {
    const favoritePlayer = document.getElementById('favoritePlayer').value;
    const favoriteTeam = document.getElementById('favoriteTeam').value;
    const dreamGame = document.getElementById('dreamGame').value;

    if (!favoritePlayer || !favoriteTeam || !dreamGame) {
        document.getElementById('response').textContent = "Please fill out all the fields!";
        return;
    }

    const responseText = `Wow, it's awesome that your favorite player is ${favoritePlayer} and your favorite team is ${favoriteTeam}! Imagine watching them play in ${dreamGame}! That would be an incredible experience!`;
    document.getElementById('response').textContent = responseText;
}