import Vue from 'vue'
import Router from 'vue-router'

import Register from '@/components/register/Register'
import Home from '@/components/Home'
import About from '@/components/About'
import Login from '@/components/Login';
import RegisterMain from '@/components/register/RegisterHome'
import Profile from '@/components/Profile'
import ProfileHome from '@/components/profile/ProfileHome'
import ProfileSettings from '@/components/profile/ProfileSettings'
import SupportHome from "@/components/support/SupportHome";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/About',
            name: 'About',
            component: About
        },
        {
            path: '/Member/Login',
            name: 'Login',
            component: Login
        },
        {
            path: '/Member/Register/Main',
            name: 'Register',
            component: RegisterMain,
        },
        {
            path: '/Member/Register/In-Progress',
            name: 'In-Progress',
            component: Register
        },
        {
            path: '/MyPage',
            name: 'Profile',
            component: Profile,
            children: [
                {
                    path: 'Home',
                    name: 'ProfileHome',
                    component: ProfileHome
                },
                {
                    path: 'Settings',
                    name: 'ProfileSettings',
                    component: ProfileSettings
                }
            ]
        },
        {
            path: '/Support',
            name: 'Support',
            component: SupportHome
        }
    ]
})
