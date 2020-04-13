import Vue from "vue";
import toast from "./Toast.vue";
const Toast = Vue.extend(toast);
export default function (obj) {
    let app = new Toast({
        el: document.createElement("div"),
        data: {
            msg:obj&&obj.msg||"修改成功",
            show: true,
            flag: true,
            type:obj&&obj.type||1
        },
        computed: {
            cls: function () {
                return this.type == 1 ? "correct" : "error"
            }
        },
    })
    document.body.appendChild(app.$el);
    setInterval(_ => {
        app.flag = false;
    }, 800)
    setInterval(_ => {
        app.show = false;
    }, 1000)
}