document.getElementById('joinButton').addEventListener('click', () => {
    const callFrame = window.DailyIframe.createFrame();
    callFrame.join({ url: 'https://padha-e.daily.co/communicationSession',token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyIjoiY29tbXVuaWNhdGlvblNlc3Npb24iLCJvIjp0cnVlLCJkIjoiZTI4ZDU5NjctYjk4Ny00OGI5LWJhOTgtNDVlNTQzYTc1ZjViIiwiaWF0IjoxNjk0Nzk1OTk3fQ.82eAdhxfg5_peyjvYV6Wu89AVMIEKP_elmUYdigmDCA"});
    // Set the size of the callFrame to occupy the entire window
    callFrame.style.width = '100%';
    callFrame.style.height = '100vh'

    // Append the callFrame to the body of the document
    document.body.appendChild(callFrame);
});








