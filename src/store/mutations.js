/*
 * vuex的mutations模块
*/
import Vue from 'vue'
import {
    RECEIVE_BOOKS
} from './mutation-types'

export default {
    [RECEIVE_BOOKS](state, {books}){
        state.books = books
    }
}