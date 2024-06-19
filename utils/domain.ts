import { isNumber } from 'ele-admin-pro';

// 解析域名结构
export function getHost(): any {
  const host = window.location.host;
  return host.split('.');
}

// 是否https
export function isHttps() {
  const protocol = window.location.protocol;
  if (protocol == 'https:') {
    return true;
  }
  return false;
}

/**
 * 获取原始域名
 * @return http://www.domain.com
 */
export function getOriginDomain(): string {
  return window.origin;
}

/**
 * 域名的第一部分
 * 获取tenantId
 * @return 10140
 */
export function getDomainPart1(): any {
  const split = getHost();
  if (split[0] == '127') {
    return undefined;
  }
  if (isNumber(split[0])) {
    return split[0];
  }
  return undefined;
}

/**
 * 通过解析泛域名获取租户ID
 * https://10140.wsdns.cn
 * @return 10140
 */
export function getTenantId() {
  return getDomainPart1();
}

/**
 * 获取根域名
 * hostname
 */
export function getHostname(): string {
  return window.location.hostname;
}

/**
 * 获取域名
 * @return https://www.domain.com
 */
export function getDomain(): string {
  return window.location.protocol + '//www.' + getRootDomain();
}

/**
 * 获取根域名
 * abc.com
 */
export function getRootDomain(): string {
  const split = getHost();
  return split[split.length - 2] + '.' + split[split.length - 1];
}

/**
 * 获取二级域名
 * @return abc.com
 */
export function getSubDomainPath(): string {
  const split = getHost();
  if (split.length == 2) {
    return '';
  }
  return split[split.length - 3];
}

/**
 * 获取产品标识
 * @return 10048
 */
export function getProductCode(): string | null {
  const subDomain = getSubDomainPath();
  if (subDomain == undefined) {
    return null;
  }
  const split = subDomain.split('-');
  return split[0];
}

/**
 * 控制台域名
 */
export function navSubDomain(path): string {
  return `${window.location.protocol}//${path}.${getRootDomain()}`;
}
