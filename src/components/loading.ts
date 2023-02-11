import { ElLoading } from 'element-plus';

let loading: { close: () => void; };
function openLoading() {
    loading = ElLoading.service({
        body: true,
        lock: true,
        text: '请求中...',
        spinner: 'el-icon-loading',
        background: 'rgba(255, 255, 255, 0.7)'
    })
}
function closeLoading() {
    loading.close();
}
export {
    openLoading,
    closeLoading
}