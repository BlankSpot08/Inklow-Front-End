import Vue from 'vue'
import Router from 'vue-router'

import Register from '@/components/register/Register'
import Home from '@/components/Home'
import About from '@/components/About'
import Login from '@/components/Login';
import RegisterMain from '@/components/register/Register.Main'
import Support from '@/components/Support'
import Profile from '@/components/Profile'
import ProfileHome from '@/components/profile/ProfileHome'
import ProfileSettings from '@/components/profile/ProfileSettings'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/member/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/member/register/main',
            name: 'Register',
            component: RegisterMain,
        },
        {
            path: '/member/register/in-progress',
            name: 'In-Progress',
            component: Register
        },
        {
            path: '/support',
            name: 'Support',
            component: Support
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
        }
    ]
})