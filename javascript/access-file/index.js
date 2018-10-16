// 获得选中的文件
function getFileList() {
    var fileList = document.getElementById('test1').files;
    console.log(fileList);
    ( fileList.length > 0 )&& preViewFileList(fileList);
}
// 预览文件信息
function preViewFileList(filelist) {
    for(var i = 0; i < filelist.length; i++ ){
        var div = document.createElement('div');
        div.innerHTML = filelist[i]['name'] +
        '->'+
        filelist[i]['size'] +
        '->' +
        filelist[i]['type'];
        document.body.appendChild(div);
    }
}
// 设置input的click事件
function setInputClick() {
    document.getElementById('test1').click();
}
// 阻止浏览器默认行为（文件拖拽自动识别并打开）
function listenDragenter(event) {
    event.preventDefault();
    event.stopPropagation();
}
function listenDragover(event) {
    event.preventDefault();
    event.stopPropagation();
}
// 监听拖拽区域drag事件获取DataTransfer对象
function listenDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    // 自动拖拽生成的dataTransfer对象
    var dataTransfer = event.dataTransfer;
    previewImage(dataTransfer.files);

}
// 图片预览
function previewImage(files) {
    for(var i = 0; i < files.length; i++){
        var file = files[i];
        // 格式验证: 格式不对进行下一个循环
        var regString = /(.jpg|.png|.svg|.gif)$/g;
        if(regString.exec(file.name) == null){
            preViewFileList([file]);
            continue;
        }
        var imagePrevBox = document.querySelector('#imagePrevBox');
        var img = document.createElement('img');
        imagePrevBox.appendChild(img);

        // 读取图片
        var fileReaderInstance = new FileReader();
        fileReaderInstance.readAsDataURL(file);
        // 读取文件触发fileReader.onload事件
        fileReaderInstance.onload = function(event) {
            img.src = event.target.result;
            // 图片原始宽高太大进行按比例缩小修正
            var res = resetImgWH(img.width, img.height);
            img.width = res && res.width;
            img.height = res && res.height;
        }
    } 
}
// 根据载入的图片大小改变预判img标签的大小
function resetImgWH(w, h) {
    var tartgetWidth = 100;
    var targetHeight = 100;
    if( w>tartgetWidth || h > targetHeight){
        var res = {};
        res = w > h ? computerHeight(tartgetWidth, h, w) : computerWidth(targetHeight, h, w);
    }
    return res;
}
// 宽度填满高度图片比例进行缩小
function computerHeight(tartgetWidth, h, w) {
    var res = {};
    res.width = tartgetWidth;
    res.height = (tartgetWidth * h) / w;
    return res;
}
function computerWidth(targetHeight, h, w) {
    var res = {};
    res.height = targetHeight;
    res.width = (targetHeight * w) / h;
    return res;
}
window.addEventListener('load', getFileList);
var dropBox = document.getElementById('dropbox');
dropBox.addEventListener('dragenter', listenDragenter,false);
dropBox.addEventListener('dragover', listenDragover, false);
dropBox.addEventListener('drop', listenDrop, false);