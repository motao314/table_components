import React from "react";
import "./style/index.less";
/*
    type: primary | dashed | danger | link | text | default
    size: large | middle | small
*/
function Button(props){
    let {type="default", size="middle",onClick = null, className="",href="",children,htmlType="button",style=null} = props;

    // class处理
    className += " kkb-btn";
    // type 处理
    (type !== "default")&&(className += " kkb-btn-" + type);
    // size 处理
    (size !== "middle")&&(className += " kkb-btn-" + size);
    className = className.trim();
    function LinkRender(){
        let {target="_self"} = props;
        return <a className={className} href={href} target={target} onClick={onClick} style={style}>
            <span>{children}</span>
        </a>
    }
    function render(){
        if(href !== ""){
            return LinkRender()
        } else {
            return <button type={htmlType} className={className} onClick={onClick} style={style}><span>{children}</span></button>
        }
    }
    return render();

}

export default Button;
