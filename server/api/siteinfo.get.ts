import {Website} from "~/api/cms/website/model";
import {ApiResult} from "~/api";

const baseURL = "https://modules.gxwebsoft.com/api";
const tenantId = String(process.env['APP_ID'])
console.log('tenantId:',tenantId)

export default defineEventHandler(async (event) => {
    return await $fetch<ApiResult<Website>>('/cms/website/getSiteInfo',{
        baseURL,
        headers: {
            tenantId
        }
    }).then((res) => {
        return res.data;
    })
})
