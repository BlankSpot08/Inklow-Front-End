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
import SupportHome from "@/components/support/SupportHome"
import SupportIndex from "@/components/support/index/SupportIndex"
import SupportWrite from "@/components/support/index/SupportWrite"
import SupportSend from "@/components/support/index/SupportSend"
import SupportInquiry from "@/components/support/index/SupportInquiry"

import { store } from '@/store/index-store'

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
            beforeEnter(to, from, next) {
                if (!store.state.loginStatus) {
                    next({name: 'Login'})
                }

                else {
                    next()
                }

            },
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
            path: '/Support/Main',
            name: 'Support',
            component: SupportHome,
        },
        {
            path: '/Support/Inquiries',
            name: 'SupportInquiry',
            component: SupportInquiry,
            beforeEnter(to, from, next) {
                if (!store.state.loginStatus) {
                    if (confirm('Do you want to go to the login page?')) {
                        next({name: 'Login'})
                    }
                }

                else {
                    next()
                }

                console.log(next)
                console.log(from)
                console.log(to)
            }
        },
        {
            path: '/Support/Send',
            name: 'SupportSend',
            component: SupportSend,
            children: [
                {
                  path: "Index",
                  name: "SupportIndex",
                  component: SupportIndex
                },
                {
                    path: "Write",
                    name: "SupportWrite",
                    component: SupportWrite,
                    beforeEnter(to, from, next)  {
                        const category = to.query['category']

                        const unprotected = ['Compromised Account/Appeal', 'Other']

                        if (unprotected.includes(category)) {
                            next()
                        }

                        else {
                            if (!store.state.loginStatus) {
                                if (confirm('Do you want to go to the login page?')) {
                                    next({name: 'Login'})
                                }
                            }

                            else {
                                next();
                            }
                        }
                    }
                }
            ]
        }
    ]
})
