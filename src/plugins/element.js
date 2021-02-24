import Vue from 'vue'

import '../plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select ,Form,Input,FormItem,Message,Menu,MenuItem,Submenu,Table,TableColumn,Pagination} from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.prototype.$message=Message