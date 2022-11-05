import { StepBackwardOutlined } from "@ant-design/icons";
import { notification } from "antd"
import type { NotificationPlacement } from 'antd/es/notification';
export const e = (msg: string, des: string = '', duration: number = 5) => {
    notification.error({
        message: msg,
        description: des, duration
    })
}

export const s = (msg: string, des: string = '') => {
    notification.success({
        message: msg,
        description: des
    })
}

export const w = (msg: string, des: string = '', duration: number = 5) => {
    notification.warning({
        message: msg,
        description: des,
        duration
    })
}

export const i = (msg: string, des: string = '') => {
    notification.info({
        message: msg,
        description: des
    })
}

export const swr = () => {
    notification.error({
        message: "Something went wrong!",
        description: "Please try again later"
    })
}
export const n = (msg, placement: NotificationPlacement = 'bottomLeft',icon) => {

    notification.info({
        message: `New notification`,
        description:msg,
        placement,
        icon: icon,
        // duration:100
    });

}
export const showBackendErrors = (res: any) => {
    if (res.data?.errors) {
        for (let e of res.data.errors) {
            notification.error({
                message: e.message,
                description: ""
            })
        }
    } else {
        swr();
    }

}

