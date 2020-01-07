export default class toast {
  /** 吐司
   * @param tit 标题
   * @param icon 图标 "success" | "loading" | "none" | undefined
   * @param duration 显示时间 默认：1500
   */
  async open(tit: any, icon?: any, duration?: number) {
    uni.showToast({
      title: tit,
      icon: icon,
      duration: duration
    });
  }
  /** 关闭吐司
   * @param time 关闭时长 默认1000ms
   */
  async close(time?: number) {
    setTimeout(
      function() {
        uni.hideToast();
      },
      time ? time : 1000
    );
  }
  /** 提示框
   * @param tit 标题
   * @param content 内容
   * @param success 点击确定执行
   * @param cancel 点击取消
   */
  async modal(tit: string, content: string) {
    const response = new Promise((resolve, reject) => {
      uni.showModal({
        title: tit,
        content: content,
        success: function(res: any) {
          if (res.confirm) {
            resolve(true);
          } else if (res.cancel) {
            return;
          }
        }
      });
    });
    return response;
  }
}
