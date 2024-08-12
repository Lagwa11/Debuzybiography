document.getElementById('downloadBtn').addEventListener('click',function(){
    const image = document.getElementById('image');
    const link = document.createElement('a');
    link.href = image.src;
    link.download = 'downloaded_image.jgp';
    link.click();
});