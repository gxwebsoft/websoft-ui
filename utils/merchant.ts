// 获取商户ID
export const getMerchantId = () => {
  const merchantId = localStorage.getItem('MerchantId');
  if (merchantId) {
    return Number(merchantId);
  }
  return undefined;
};

// 获取商户名称
export const getMerchantName = () => {
  const MerchantName = localStorage.getItem('MerchantName');
  if (MerchantName) {
    return MerchantName;
  }
  return undefined;
};
