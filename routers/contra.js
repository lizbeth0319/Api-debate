import Router from "express"
import contra from "../controllers/contra"

const router= Router()

router.get("/api/contra",contra)