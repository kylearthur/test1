import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router'
import { createToast } from 'mosha-vue-toastify';


const GlobalMixins = () => {
    const baseUrl = ref('http://54.153.155.160')
    const router = useRouter()
   
    const capitalize = (value) =>{
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
    }
    const showToast = (msg,option)=>{
        createToast(msg,option)
    }

    const setSession = (setData,setName) =>{
        console.log('start')
        sessionStorage.setItem(setName,JSON.stringify(setData))
    }

    const getSession = (getName) =>{
        let data = sessionStorage.getItem(getName)
        let jsonData = JSON.parse(data);
        return jsonData;

    }

    const signOut = ()=>{
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('coins')
        router.push({name:'Login'})
    }

    return {capitalize, baseUrl, setSession, getSession, signOut, showToast}

}

export default GlobalMixins;