import { Router } from "express";
import { getPage } from "../repositories/Product.model";
const router = Router();
/**
 * Tìm kiếm products theo tiêu chí tìm kiếm, hiện support tìm theo code, tên, trạng thái, nhà cung cấp
 * @searchby code, name, supplier, status
 */
router.get("/search", async (req, res, next) => {
  const { code, name, status, supplier, pageIndex, pageSize } = req.query;
  getPage({ pageIndex, pageSize, code, name, status, supplier })
    .then((data) => {
      res.send(data);
    })
    .catch((ex) => {
      console.log("Error happened", ex);
      res.send({ status: false, message: "Có lỗi khi tìm kiếm sản phẩm" });
    });
});
export default router;
