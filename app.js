document.getElementById('convertBtn').addEventListener('click', async function() {
    const videoUrl = document.getElementById('videoUrl').value;
    const visualsDiv = document.getElementById('visuals');
    const audioPlayer = document.getElementById('audioPlayer');

    if (videoUrl) {
        const apiKey = '1f4115c588mshef9d1f7e1bb9c28p14857fjsn49ca18be1035';
        const encodedUrl = encodeURIComponent(videoUrl);
        const apiUrl = `https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/custom/?url=${encodedUrl}&quality=320`;

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': apiKey,
                'x-rapidapi-host': 'youtube-mp3-downloader2.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(apiUrl, options);
            const data = await response.json();

            if (data.status === "finished") {
                audioPlayer.src = data.dlink;

            
            } else {
                alert('Error: Could not convert video');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    } else {
        alert('Please enter a valid YouTube URL');
    }
});
document.getElementById('rewindBtn').addEventListener('click', () => {
    document.getElementById('audioPlayer').currentTime -= 10;
});

document.getElementById('fastForwardBtn').addEventListener('click', () => {
    document.getElementById('audioPlayer').currentTime += 10; 
});


 
const audioPlayer = document.getElementById('audioPlayer');
document.getElementById('rewindBtn').addEventListener('click', () => {
    audioPlayer.currentTime -= 10; 
});

document.getElementById('fastForwardBtn').addEventListener('click', () => {
    audioPlayer.currentTime += 10; 
}); 
 

//https://youtu.be/EqCCIBYrJng?si=MAzsuNYr3SnjXS4z