import { Qs } from "./module";

interface ContentType {
    [prop: string]: string;
}

// formData
const setFormDataParams = (data: any) => {
    const fd = new FormData();
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            if (key.endsWith('[]')) {
                data[key].forEach((item: any) => {
                    fd.append(key, item)
                })
            } else {
                fd.append(key, data[key])
            }
        }
    }
    return fd;
}

// 设置request.headers['Content-Type']
export const setContentType = (contentType: string) => {
    const options: ContentType = {
        _json: "application/json",
        _file: "multipart/form-data",
        _forndata: "application/x-www-form-urlencoded"
    };

    return options[contentType] || "application/json";
}

// 设置request.data格式
export const setFormatData = (contentType: string, data: any) => {
    const options: any = {
        "application/json": data,
        "multipart/form-data": setFormDataParams(data),
        "application/x-www-form-urlencoded": Qs.stringify(data),
    }

    return options[contentType] || data;
}

