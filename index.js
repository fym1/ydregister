$(function(){
    var $name = $('#name'),
        $phone = $('#phone'),
        $pwd = $('#pwd'),
        $test = $('#test'),
        $sign = $('#sign'),
        $getcode = $(".getcode");

    $getcode.click(function(){
        var timer,num = 10;
        $getcode.attr("disabled",true);
        timer = setInterval(function(){
            num--;
            if(num === 0 ){
                clearInterval(timer);
                $getcode.val("获取验证码");
                $getcode.removeAttr('disabled');
            }
            else{
                $getcode.val("获取验证码("+num+"s)");
            }
        },1000)
    });

    $sign.click(function(){
        if(!validate('#name') || !validate('#phone') || !validate('#pwd') || !validate('#test')){
            return;
        }else{
            alert('注册成功');
        }
    });

    $name.focusout(function(){     
        validate('#name'); 
    });
    $phone.focusout(function(){
        validate('#phone');
    });
    $pwd.focusout(function(){
        validate('#pwd');
    });
    $test.focusout(function(){
        validate('#test');
    });

    function validate(field){
        var $data = $(field),
            $msg = $(field+"-message");

        if($data.val() === ''){
            $msg.html('不能为空');
            return false;
        }
        if(field === '#name'){
            var reg1 = /^(?!(\d+)$)[\u4e00-\u9fff\w]+$/;
            if(!reg1.test($data.val())){
                $msg.html('用户名仅支持中英文，数字和下划线且不能为纯数字');
                return false;
            }
        }
        if(field === '#phone'){
            var reg2 = /^[1][3,4,5,7,8][0-9]{9}$/;
            if(!reg2.test($data.val())) {
                $msg.html('手机号码格式不正确');
                return false;
            } 
        }
        if(field === '#pwd'){
            var reg3 = /^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/;
            if($data.val().length<6 || $data.val().length>14 || !reg3.test($data.val())){
                $msg.html('密码设置不符合要求');
                return false;
            }  
        }
        
        return true;
    }
});