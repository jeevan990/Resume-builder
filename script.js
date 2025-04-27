function generateResume() {
    document.getElementById('preview-name').innerText = document.getElementById('name').value;
    document.getElementById('preview-email').innerText = "Email: " + document.getElementById('email').value;
    document.getElementById('preview-phone').innerText = "Phone: " + document.getElementById('phone').value;
    document.getElementById('preview-education').innerText = document.getElementById('education').value;
    document.getElementById('preview-experience').innerText = document.getElementById('experience').value;
    document.getElementById('preview-skills').innerText = document.getElementById('skills').value;
}

function downloadResume() {
    const resume = document.getElementById('resume');
    html2pdf().from(resume).save('resume.pdf');
}
