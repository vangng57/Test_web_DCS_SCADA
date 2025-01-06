// Hàm chức năng ghi giá trị tag vào DB_Input
function setTag(tag,val) {
    var tag_link = '"DB_Input."' + tag;
    var url = "IO.html";
    sdata =  tag_link  + '=' + val;
    $.post(url, sdata, function (result2) { });
}
//Hàm chức năng đọc giá trị tag từ DB_Output
function IOField(ObjectID, tag){
    url = "IO.html";
    $.getJSON(url, function (result) {
        document.getElementById(ObjectID).value = result[tag];
    });
}
// Hiển thị giá trị lên object id
setInterval(function(){
    if (tag_Edit_enable == true){
    IOField("tbx_may_tron","DB_Output.tag1");
    }
},1000);
// Ham chuc nang nut sua / luu du lieu
function fn_DataEdit(button1, button2)
{
    document.getElementById(button1).style.zIndex = "1";
    document.getElementById(button2).style.zIndex = "0";
}
//Tag Edit
var tag_Edit_enable = false;
//Ham bao dang sua du lieu
function fn_Editing()
{
    fn_DataEdit("btn_Save","btn_Edit");
    tag_Edit_enable = true;
    //
    document.getElementById("tbx_may_tron").disabled = false;
}

//Ham bao luu du lieu
function fn_Saving()
{
    fn_DataEdit("btn_Edit","btn_Save");
    tag_Edit_enable = false;
    //Lay gia tri tu textbox
    var tag_data = document.getElementById("tbx_may_tron").value;

    setTag('ten_tag',tag_data);
    //Disable chuc nang IO field
    document.getElementById("tbx_may_tron").disabled = true;
    alert("Lưu dữ liệu thành công");
}