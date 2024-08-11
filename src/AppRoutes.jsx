import {lazy } from "react";
import Home from './components/home'

const AboutUs = lazy(() => import('./components/about'))
const Users = lazy(() => import('./components/users'))
const UserProfile = lazy(() => import('./components/userProfile'))
const SearchUser = lazy(() => import('./components/searchUser'))
const Login = lazy(() => import('./components/login'))
const AuthProfile = lazy(() => import('./components/authProfile'))
const RepoDetail = lazy(() => import('./components/repoDetail'))
const NotFound = lazy(() => import('./components/NotFound'))

export const appRoutes = [
  {
    path: '/',
    component: Home,
    reqAuth: false,
  },
  {
    path: '/users',
    component: Users,
    reqAuth: false,
  },
  {
    path: '/AboutUs',
    component: AboutUs,
    reqAuth: false,
  },
  {
    path: '/users/user/:username',
    component: UserProfile,
    reqAuth: false,
  },
  {
    path: '/Search',
    component: SearchUser,
    reqAuth: false,
  },
  {
    path: '/Login',
    component: Login,
    reqAuth: false,
  },
  {
    path: '/AuthProfile',
    component: AuthProfile,
    reqAuth: true,
  },
  {
    path: '/repo-detail/:name/:username',
    component: RepoDetail,
    reqAuth: true,
  },
  {
    path: '*',
    component: NotFound,
    reqAuth: false,
  },
]