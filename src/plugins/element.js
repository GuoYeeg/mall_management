import Vue from 'vue'

import '../plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select ,Form,Input,FormItem,Message,Menu,MenuItem,Submenu,Table,TableColumn,Pagination,Upload,RadioGroup,RadioButton,Option,TabPane,Tabs,CheckboxGroup,Checkbox,Radio,Switch} from 'element-ui';
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
Vue.use(Upload)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Option)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(Radio)
Vue.use(Switch)

Vue.prototype.$message=Message