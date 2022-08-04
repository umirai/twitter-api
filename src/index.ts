require('dotenv').config()
import { getUsersByKeyword, getUsersByFollows } from '@/function'

getUsersByKeyword('スプラトゥーン3')
getUsersByFollows('miramira_dev')
