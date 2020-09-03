import React from "react";
import "./style/index.less";
/*
    type: primary | dashed | danger | link | text | default
    size: large | middle | small
*/
function Input(props){
    let {disabled=false,prefix,size='large',suffix,onPressEnter=null,onKeyPress=null,bordered=true,type="text",className="",...reset} = props;
    className += ' kkb-input';
    disabled&&(className += ' kkb-input-disabled');
    size!=="large"&&(className += ' kkb-input-'+size);
    let input = (<input type={type} className={className.trim()} {...reset} onKeyPress={(onPressEnter||onKeyPress)&&((e)=>{
        if(e.keyCode === 13){
            onKeyPress&&onPressEnter.call(this,e)
        }
        onKeyPress&&onKeyPress.call(this,e);
    })}  />)
    function render(){
        if(prefix||suffix){
            return <span className={"kkb-input-affix-wrapper kkb-input-affix-wrapper-"+size}>
                    {prefix&&<span className='ant-input-prefix'>{prefix}</span>}
                    {input}
                    {suffix&&<span className='ant-input-suffix'>{suffix}</span>}
            </span>
        }
        return input
    }
    return render();

}

export default Input;
