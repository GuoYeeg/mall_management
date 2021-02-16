import Vue from 'vue'

import '../plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select ,Form,Input,FormItem,Message} from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

Vue.prototype.$message=Message