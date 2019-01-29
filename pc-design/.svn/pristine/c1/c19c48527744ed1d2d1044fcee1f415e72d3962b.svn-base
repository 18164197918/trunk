import Vue from 'vue'

declare module 'vue/types/vue' {
  type getConfig = {
    /**
     * 基础通讯地址
     */
    baseURL?: string
    /**
     * 通讯头部信息
     */
    headers?: object
    /**
     * 资源参数
     */
    resource?: object
    /**
     * 查询参数
     */
    query?: object
    /**
    * 是否自动显示操作提示，默认为 false
    *
    * @default false
    */
    tips?: boolean
    /**
    * 通讯场景，根据场景会自动切换baseURL，但是如果传了baseURL的话，会被覆盖
    */
    scene?: string
  }

  type httpConfig = {
    /**
     * 基础通讯地址
     */
    baseURL?: string
    /**
     * 通讯头部信息
     */
    headers?: object
    /**
     * 资源参数
     */
    resource?: object
    /**
     * 查询参数
     */
    query?: object
    /**
    * 传输数据
    */
    data?: object
    /**
    * 是否自动显示操作提示，默认为 true
    * 
    * @default true
    */
    tips?: boolean
    /**
    * 通讯场景，根据场景会自动切换baseURL，但是如果传了baseURL的话，会被覆盖
    */
    scene?: string
  }

  interface Vue {
    /**
     * GET请求
     *
     * @param {string} url 通讯地址
     * @param {object} [config] 配置文件
     * @param {string} [config.baseURL] 基础通讯地址
     * @param {object} [config.headers] 通讯头部信息
     * @param {object} [config.resource] 资源参数
     * @param {object} [config.query] 查询参数
     * @param {boolean} [config.tips=false] 是否自动显示操作提示，默认为 false
     * @param {string} [config.scene] 通讯场景，根据场景会自动切换baseURL，但是如果传了baseURL的话，会被覆盖
     * @returns {AxiosPromise<any>}
     */
    $httpGet(url: string, config?: getConfig): Promise<Object>
    /**
     * DELETE请求
     *
     * @param {string} url 通讯地址
     * @param {object} [config] 配置文件
     * @param {object} [config.baseURL] 基础通讯地址
     * @param {object} [config.headers] 通讯头部
     * @param {object} [config.resource] 资源参数
     * @param {object} [config.query] 查询参数
     * @param {object} [config.data] 传输数据
     * @param {boolean} [config.tips=true] 是否自动显示操作提示，默认为 true
     * @param {string} [config.scene] 通讯场景，根据场景会自动切换baseURL，但是如果传了baseURL的话，会被覆盖
     * @returns {AxiosPromise<any>}
     */
    $httpDelete(url: string, config?: httpConfig): Promise<Object>
    /**
     * POST请求
     *
     * @param {string} url 通讯地址
     * @param {object} [config] 配置文件
     * @param {object} [config.baseURL] 基础通讯地址
     * @param {object} [config.headers] 通讯头部
     * @param {object} [config.resource] 资源参数
     * @param {object} [config.query] 查询参数
     * @param {object} [config.data] 传输数据
     * @param {boolean} [config.tips=true] 是否自动显示操作提示，默认为 true
     * @param {string} [config.scene] 通讯场景，根据场景会自动切换baseURL，但是如果传了baseURL的话，会被覆盖
     * @returns {AxiosPromise<any>}
     */
    $httpPost(url: string, config?: httpConfig): Promise<Object>
    /**
     * PUT请求
     *
     * @param {string} url 通讯地址
     * @param {object} [config] 配置文件
     * @param {object} [config.baseURL] 基础通讯地址
     * @param {object} [config.headers] 通讯头部
     * @param {object} [config.resource] 资源参数
     * @param {object} [config.query] 查询参数
     * @param {object} [config.data] 传输数据
     * @param {boolean} [config.tips=true] 是否自动显示操作提示，默认为 true
     * @param {string} [config.scene] 通讯场景，根据场景会自动切换baseURL，但是如果传了baseURL的话，会被覆盖
     * @returns {AxiosPromise<any>}
     */
    $httpPut(url: string, config?: httpConfig): Promise<Object>
  }
}   