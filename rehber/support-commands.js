"use strict";
const supportCommands=[
  {
    "id": "towny-001",
    "mode": "towny",
    "command": "/plot trust add [isim]",
    "description": "Belirttiğin oyuncuya bulunduğun arsada yetki verir.",
    "category": "Arsa"
  },
  {
    "id": "towny-002",
    "mode": "towny",
    "command": "/plot trust remove [isim]",
    "description": "Belirttiğin oyuncunun arsadaki yetkisini kaldırır.",
    "category": "Arsa"
  },
  {
    "id": "towny-003",
    "mode": "towny",
    "command": "/plot forsale",
    "description": "Bulunduğun arsayı satışa çıkarır.",
    "category": "Arsa"
  },
  {
    "id": "towny-004",
    "mode": "towny",
    "command": "/plot notforsale",
    "description": "Bulunduğun arsanın satışını iptal eder.",
    "category": "Arsa"
  },
  {
    "id": "towny-005",
    "mode": "towny",
    "command": "/plot clear",
    "description": "Bulunduğun arsadaki tabelaları siler. Market tabelası silinse de marketin durumunu değiştirmez.",
    "category": "Arsa"
  },
  {
    "id": "towny-006",
    "mode": "towny",
    "command": "/plot toggle pvp on/off",
    "description": "Bulunduğun arsada PvP’yi açar veya kapatır.",
    "category": "Arsa"
  },
  {
    "id": "towny-007",
    "mode": "towny",
    "command": "/plot toggle mobs on/off",
    "description": "Bulunduğun arsada mob doğmasını açar veya kapatır.",
    "category": "Arsa"
  },
  {
    "id": "towny-008",
    "mode": "towny",
    "command": "/plot toggle explosion on/off",
    "description": "Bulunduğun arsada patlamaları açar veya kapatır.",
    "category": "Arsa"
  },
  {
    "id": "towny-009",
    "mode": "towny",
    "command": "/plot toggle fire on/off",
    "description": "Bulunduğun arsada yangını açar veya kapatır.",
    "category": "Arsa"
  },
  {
    "id": "towny-010",
    "mode": "towny",
    "command": "/plot set jail",
    "description": "Bulunduğun arsayı hapishane olarak ayarlar.",
    "category": "Arsa"
  },
  {
    "id": "towny-011",
    "mode": "towny",
    "command": "/plot set arena",
    "description": "Bulunduğun arsayı savaş alanı olarak ayarlar.",
    "category": "Arsa"
  },
  {
    "id": "towny-012",
    "mode": "towny",
    "command": "/nation leave",
    "description": "Krallıktan ayrılır. Ardından /confirm ile onaylanır.",
    "category": "Krallık"
  },
  {
    "id": "towny-013",
    "mode": "towny",
    "command": "/nation withdraw [miktar]",
    "description": "Krallık bankasından para çeker.",
    "category": "Krallık"
  },
  {
    "id": "towny-014",
    "mode": "towny",
    "command": "/nation deposit [miktar]",
    "description": "Krallık bankasına para yatırır.",
    "category": "Krallık"
  },
  {
    "id": "towny-015",
    "mode": "towny",
    "command": "/nation create [isim]",
    "description": "Krallık oluşturur.",
    "category": "Krallık"
  },
  {
    "id": "towny-016",
    "mode": "towny",
    "command": "/nation add [kasaba]",
    "description": "Krallığa kasaba ekler.",
    "category": "Krallık"
  },
  {
    "id": "towny-017",
    "mode": "towny",
    "command": "/nation kick [kasaba]",
    "description": "Krallıktan kasaba çıkartır.",
    "category": "Krallık"
  },
  {
    "id": "towny-018",
    "mode": "towny",
    "command": "/nation delete",
    "description": "Krallığı siler. Ardından /confirm ile onaylanır.",
    "category": "Krallık"
  },
  {
    "id": "towny-019",
    "mode": "towny",
    "command": "/nation rank add [nick] [rütbe]",
    "description": "Belirttiğin oyuncuya krallıkta rütbe verir.",
    "category": "Krallık"
  },
  {
    "id": "towny-020",
    "mode": "towny",
    "command": "/nation rank remove [nick] [rütbe]",
    "description": "Belirttiğin oyuncunun krallık rütbesini kaldırır.",
    "category": "Krallık"
  },
  {
    "id": "towny-021",
    "mode": "towny",
    "command": "/nation set king [nick]",
    "description": "Krallığın liderini değiştirir.",
    "category": "Krallık"
  },
  {
    "id": "towny-022",
    "mode": "towny",
    "command": "/nation set capital [şehir]",
    "description": "Başkenti seçer.",
    "category": "Krallık"
  },
  {
    "id": "towny-023",
    "mode": "towny",
    "command": "/nation set taxes [miktar]",
    "description": "Vergiyi ayarlar.",
    "category": "Krallık"
  },
  {
    "id": "towny-024",
    "mode": "towny",
    "command": "/nation set name [isim]",
    "description": "Krallığın adını değiştirir.",
    "category": "Krallık"
  },
  {
    "id": "towny-025",
    "mode": "towny",
    "command": "/nation ally add [krallık]",
    "description": "Başka bir krallığa ittifak isteği gönderir.",
    "category": "Krallık"
  },
  {
    "id": "towny-026",
    "mode": "towny",
    "command": "/nation ally accept [krallık]",
    "description": "Gelen ittifak isteğini kabul eder.",
    "category": "Krallık"
  },
  {
    "id": "towny-027",
    "mode": "towny",
    "command": "/nation ally deny [krallık]",
    "description": "Gelen ittifak isteğini reddeder.",
    "category": "Krallık"
  },
  {
    "id": "towny-028",
    "mode": "towny",
    "command": "/nation enemy add [krallık]",
    "description": "Bir krallığı düşman olarak belirler. (Kuşatma açmak istiyorsanız zorunlu)",
    "category": "Krallık"
  },
  {
    "id": "towny-029",
    "mode": "towny",
    "command": "/nation enemy remove [krallık]",
    "description": "Bir krallığı düşmanlıktan çıkarır.",
    "category": "Krallık"
  },
  {
    "id": "towny-030",
    "mode": "towny",
    "command": "/town leave",
    "description": "Kasabadan ayrılmanı sağlar Ardından /confirm ile onaylanır.",
    "category": "Kasaba"
  },
  {
    "id": "towny-031",
    "mode": "towny",
    "command": "/town create [isim]",
    "description": "Kasaba oluşturur.",
    "category": "Kasaba"
  },
  {
    "id": "towny-032",
    "mode": "towny",
    "command": "/town add [nick]",
    "description": "Belirttiğin oyuncuya kasabana katılma daveti gönderir.",
    "category": "Kasaba"
  },
  {
    "id": "towny-033",
    "mode": "towny",
    "command": "/town kick [nick]",
    "description": "Kasabandan üye çıkartır.",
    "category": "Kasaba"
  },
  {
    "id": "towny-034",
    "mode": "towny",
    "command": "/town spawn",
    "description": "Kasabanın spawn noktasına ışınlanmanı sağlar.",
    "category": "Kasaba"
  },
  {
    "id": "towny-035",
    "mode": "towny",
    "command": "/town spawn [isim]",
    "description": "Herhangi bir kasabanın ışınlanma noktasına gitmeni sağlar.",
    "category": "Kasaba"
  },
  {
    "id": "towny-036",
    "mode": "towny",
    "command": "/town claim",
    "description": "Kasabanın yanındaki yerleşkeleri satın almanı sağlar. üye ekledikçe bu sayı artar.",
    "category": "Kasaba"
  },
  {
    "id": "towny-037",
    "mode": "towny",
    "command": "/town unclaim",
    "description": "Kasabaya bağlı bulunduğun yerleşkeyi serbest bırakır.",
    "category": "Kasaba"
  },
  {
    "id": "towny-038",
    "mode": "towny",
    "command": "/town withdraw [miktar]",
    "description": "Kasabanın kasasından para çeker.",
    "category": "Kasaba"
  },
  {
    "id": "towny-039",
    "mode": "towny",
    "command": "/town deposit [miktar]",
    "description": "Kasabanın kasasına para ekler.",
    "category": "Kasaba"
  },
  {
    "id": "towny-040",
    "mode": "towny",
    "command": "/town rank remove [nick] [rütbe]",
    "description": "Belirttiğin oyuncunun kasabadaki rütbesini kaldırır.",
    "category": "Kasaba"
  },
  {
    "id": "towny-041",
    "mode": "towny",
    "command": "/town rank add [nick] [rütbe]",
    "description": "Belirttiğin oyuncuya kasabada rütbe verir.",
    "category": "Kasaba"
  },
  {
    "id": "towny-042",
    "mode": "towny",
    "command": "/town delete",
    "description": "Kasabayı silmeye yarar. Ardından /confirm ile onaylanır.",
    "category": "Kasaba"
  },
  {
    "id": "towny-043",
    "mode": "towny",
    "command": "/town invite [nick]",
    "description": "Belirttiğin oyuncuya kasabana katılma daveti gönderir.",
    "category": "Kasaba"
  },
  {
    "id": "towny-044",
    "mode": "towny",
    "command": "/town trust add [nick]",
    "description": "Belirttiğin oyuncuyu kasabada güvenilir oyuncu olarak ekler.",
    "category": "Kasaba"
  },
  {
    "id": "towny-045",
    "mode": "towny",
    "command": "/town set mayor [nick]",
    "description": "Belirttiğin oyuncuyu kasabanın yeni başkanı yapar.",
    "category": "Kasaba"
  },
  {
    "id": "towny-046",
    "mode": "towny",
    "command": "/town set spawn",
    "description": "Kasabanın başlangıç noktasını bulunduğun yere ayarlar.",
    "category": "Kasaba"
  },
  {
    "id": "towny-047",
    "mode": "towny",
    "command": "/town set spawncost [miktar]",
    "description": "Kasabana ışınlanan oyunculardan alınacak ücreti belirler.",
    "category": "Kasaba"
  },
  {
    "id": "towny-048",
    "mode": "towny",
    "command": "/town set name [isim]",
    "description": "Kasabanın adını değiştirir.",
    "category": "Kasaba"
  },
  {
    "id": "towny-049",
    "mode": "towny",
    "command": "/town toggle explosion on/off",
    "description": "Kasaba içinde patlamaları açar veya kapatır.",
    "category": "Kasaba"
  },
  {
    "id": "towny-050",
    "mode": "towny",
    "command": "/town toggle fire on/off",
    "description": "Kasaba içinde ateş yayılmasını açar veya kapatır.",
    "category": "Kasaba"
  },
  {
    "id": "towny-051",
    "mode": "towny",
    "command": "/town toggle mobs on/off",
    "description": "Kasabada mob bulunmasını veya doğmasını açar ya da kapatır.",
    "category": "Kasaba"
  },
  {
    "id": "towny-052",
    "mode": "towny",
    "command": "/town toggle open on/off",
    "description": "Kasabanın yabancı oyuncuların katılımına açık olmasını açar veya kapatır.",
    "category": "Kasaba"
  },
  {
    "id": "towny-053",
    "mode": "towny",
    "command": "/town toggle public on/off",
    "description": "Yabancı oyuncuların kasabanın spawn noktasına ışınlanmasını açar veya kapatır.",
    "category": "Kasaba"
  },
  {
    "id": "towny-054",
    "mode": "towny",
    "command": "/town toggle pvp on/off",
    "description": "Kasabada PvP’yi açar veya kapatır.",
    "category": "Kasaba"
  },
  {
    "id": "towny-055",
    "mode": "towny",
    "command": "/sw hud [kasaba adı]",
    "description": "Aktif olarak devam eden kuşatmanın bilgilerini gösterir.",
    "category": "Kuşatma"
  },
  {
    "id": "towny-056",
    "mode": "towny",
    "command": "/sw collect",
    "description": "Ganimet sandığını toplar.",
    "category": "Kuşatma"
  },
  {
    "id": "towny-057",
    "mode": "towny",
    "command": "/qs create [fiyat]",
    "description": "Satmak istediğin ürünü eline alıp sandığa bakarak sandık marketi oluşturur.",
    "category": "Sandık marketi"
  },
  {
    "id": "towny-058",
    "mode": "towny",
    "command": "/qs remove",
    "description": "Baktığın sandıktaki marketi kaldırır.",
    "category": "Sandık marketi"
  },
  {
    "id": "towny-059",
    "mode": "towny",
    "command": "/qs buy",
    "description": "Baktığın sandık marketini alış moduna geçirir.",
    "category": "Sandık marketi"
  },
  {
    "id": "towny-060",
    "mode": "towny",
    "command": "/qs sell",
    "description": "Baktığın sandık marketini satış moduna geçirir.",
    "category": "Sandık marketi"
  },
  {
    "id": "towny-061",
    "mode": "towny",
    "command": "/qs staff add [isim]",
    "description": "Belirttiğin oyuncuyu sandık marketine yetkili üye olarak ekler.",
    "category": "Sandık marketi"
  },
  {
    "id": "towny-062",
    "mode": "towny",
    "command": "/qs staff remove [isim]",
    "description": "Belirttiğin oyuncuyu sandık marketinin yetkili üyeliğinden çıkarır.",
    "category": "Sandık marketi"
  },
  {
    "id": "sky-001",
    "mode": "sky",
    "command": "/is",
    "description": "Ada menüsünü açar ve adanla ilgili tüm işlemleri yapmanı sağlar.",
    "category": "Ada yönetimi"
  },
  {
    "id": "sky-002",
    "mode": "sky",
    "command": "/is create",
    "description": "Yeni bir ada kurmanı ve maceraya başlamanı sağlar.",
    "category": "Ada yönetimi"
  },
  {
    "id": "sky-003",
    "mode": "sky",
    "command": "/is go",
    "description": "Adanın spawn noktasına ışınlar.",
    "category": "Ada yönetimi"
  },
  {
    "id": "sky-004",
    "mode": "sky",
    "command": "/is reset",
    "description": "Eski adanı silip yeni bir ada oluşturur.",
    "category": "Ada yönetimi"
  },
  {
    "id": "sky-005",
    "mode": "sky",
    "command": "/is info [nick]",
    "description": "İsmini yazdığın oyuncunun adası hakkındaki bilgileri verir.",
    "category": "Ada yönetimi"
  },
  {
    "id": "sky-006",
    "mode": "sky",
    "command": "/is settings",
    "description": "Ada ayarları menüsünü açar.",
    "category": "Ada yönetimi"
  },
  {
    "id": "sky-007",
    "mode": "sky",
    "command": "/is setname [isim]",
    "description": "Adanın ismini belirler.",
    "category": "Ada yönetimi"
  },
  {
    "id": "sky-008",
    "mode": "sky",
    "command": "/is resetname",
    "description": "Adanın ismini sıfırlar.",
    "category": "Ada yönetimi"
  },
  {
    "id": "sky-009",
    "mode": "sky",
    "command": "/is ban [nick]",
    "description": "İsmini yazdığın oyuncuyu adandan banlar.",
    "category": "Ada yönetimi"
  },
  {
    "id": "sky-010",
    "mode": "sky",
    "command": "/is unban [nick]",
    "description": "İsmini yazdığın oyuncunun ada banını açar.",
    "category": "Ada yönetimi"
  },
  {
    "id": "sky-011",
    "mode": "sky",
    "command": "/is banlist",
    "description": "Adandan banlı olan oyuncuların listesini gösterir.",
    "category": "Ada yönetimi"
  },
  {
    "id": "sky-012",
    "mode": "sky",
    "command": "/is expel [nick]",
    "description": "İsmini yazdığın oyuncuyu adandan atar (tekrar gelebilir).",
    "category": "Ada yönetimi"
  },
  {
    "id": "sky-013",
    "mode": "sky",
    "command": "/is near",
    "description": "Yakında bulunan adaları gösterir.",
    "category": "Ada yönetimi"
  },
  {
    "id": "sky-014",
    "mode": "sky",
    "command": "/is sethome",
    "description": "Bulunduğun bloğu adanın yeni spawn noktası yapar.",
    "category": "Ada yönetimi"
  },
  {
    "id": "sky-015",
    "mode": "sky",
    "command": "/is border",
    "description": "Ada sınırlarını açar veya kapatır.",
    "category": "Ada yönetimi"
  },
  {
    "id": "sky-016",
    "mode": "sky",
    "command": "/is level",
    "description": "Ada seviyeni günceller.",
    "category": "Ada yönetimi"
  },
  {
    "id": "sky-017",
    "mode": "sky",
    "command": "/is level [nick]",
    "description": "İsmini yazdığın oyuncunun ada seviyesini gösterir.",
    "category": "Ada yönetimi"
  },
  {
    "id": "sky-018",
    "mode": "sky",
    "command": "/is top",
    "description": "En yüksek seviyeli ilk 10 adayı gösterir.",
    "category": "Ada yönetimi"
  },
  {
    "id": "sky-019",
    "mode": "sky",
    "command": "/is value",
    "description": "Eline aldığın bloğun adaya yerleştirildiğinde kaç seviye vereceğini gösterir.",
    "category": "Ada yönetimi"
  },
  {
    "id": "sky-020",
    "mode": "sky",
    "command": "/is chat",
    "description": "Ada sohbetini açar (tekrar yazıldığında kapatır).",
    "category": "Ada yönetimi"
  },
  {
    "id": "sky-021",
    "mode": "sky",
    "command": "/is limits",
    "description": "Adada limitli olan blokların listesini ve limitlerini gösterir.",
    "category": "Ada yönetimi"
  },
  {
    "id": "sky-022",
    "mode": "sky",
    "command": "/is warp [isim]",
    "description": "İsmini yazdığın warpa ışınlar.",
    "category": "Ada yönetimi"
  },
  {
    "id": "sky-023",
    "mode": "sky",
    "command": "/is warps",
    "description": "Var olan warpların listelendiği menüyü açar.",
    "category": "Ada yönetimi"
  },
  {
    "id": "sky-024",
    "mode": "sky",
    "command": "/is team",
    "description": "Ada üyelerini gösterir.",
    "category": "Ada üyeleri"
  },
  {
    "id": "sky-025",
    "mode": "sky",
    "command": "/is team invite [nick]",
    "description": "İsmini yazdığın oyuncuya adaya katılma daveti yollar.",
    "category": "Ada üyeleri"
  },
  {
    "id": "sky-026",
    "mode": "sky",
    "command": "/is team leave",
    "description": "Bulunduğun adadan ayrılmanı sağlar.",
    "category": "Ada üyeleri"
  },
  {
    "id": "sky-027",
    "mode": "sky",
    "command": "/is team setowner [nick]",
    "description": "Adayı ismini yazdığın ada üyesine devreder.",
    "category": "Ada üyeleri"
  },
  {
    "id": "sky-028",
    "mode": "sky",
    "command": "/is team promote [nick]",
    "description": "İsmini yazdığın ada üyesinin rütbesini yükseltir.",
    "category": "Ada üyeleri"
  },
  {
    "id": "sky-029",
    "mode": "sky",
    "command": "/is team demote [nick]",
    "description": "İsmini yazdığın ada üyesinin rütbesini düşürür.",
    "category": "Ada üyeleri"
  },
  {
    "id": "sky-030",
    "mode": "sky",
    "command": "/is team kick [nick]",
    "description": "İsmini yazdığın ada üyesini adadan atar.",
    "category": "Ada üyeleri"
  },
  {
    "id": "sky-031",
    "mode": "sky",
    "command": "/is team accept",
    "description": "Gelen ada davetini kabul etmeni sağlar.",
    "category": "Ada üyeleri"
  },
  {
    "id": "sky-032",
    "mode": "sky",
    "command": "/is team reject",
    "description": "Gelen ada davetini reddetmeni sağlar.",
    "category": "Ada üyeleri"
  },
  {
    "id": "sky-033",
    "mode": "sky",
    "command": "/is team trust [nick]",
    "description": "İsmini yazdığın oyuncuyu adana arkadaş olarak ekler.",
    "category": "Ada üyeleri"
  },
  {
    "id": "sky-034",
    "mode": "sky",
    "command": "/is team untrust [nick]",
    "description": "İsmini yazdığın oyuncuyu adandan arkadaş olmaktan çıkarır.",
    "category": "Ada üyeleri"
  },
  {
    "id": "sky-035",
    "mode": "sky",
    "command": "/is team coop [nick]",
    "description": "İsmini yazdığın oyuncuyu adaya işçi olarak alır.",
    "category": "Ada üyeleri"
  },
  {
    "id": "sky-036",
    "mode": "sky",
    "command": "/is team uncoop [nick]",
    "description": "İsmini yazdığın işçinin işçi yetkisini alır.",
    "category": "Ada üyeleri"
  },
  {
    "id": "sky-037",
    "mode": "sky",
    "command": "/yükseltme",
    "description": "Piston sınırı, ada sınırı, jeneratör ve üye sınırı yükseltme menüsünü açar.",
    "category": "Sistemler"
  },
  {
    "id": "sky-038",
    "mode": "sky",
    "command": "/çiftçi",
    "description": "Yere düşen eşyaları otomatik toplayan çiftçi sistemine erişmeni sağlar.",
    "category": "Sistemler"
  },
  {
    "id": "sky-039",
    "mode": "sky",
    "command": "/qs create [fiyat]",
    "description": "Satmak istediğin ürünü eline alıp sandığa bakarak sandık marketi oluşturur.",
    "category": "Sandık marketi"
  },
  {
    "id": "sky-040",
    "mode": "sky",
    "command": "/qs kaldır",
    "description": "Baktığın satış sandığındaki pazarı kaldırır.",
    "category": "Sandık marketi"
  },
  {
    "id": "sky-041",
    "mode": "sky",
    "command": "/qs setowner [nick]",
    "description": "Baktığın satış sandığının sahibini değiştirir.",
    "category": "Sandık marketi"
  },
  {
    "id": "sky-042",
    "mode": "sky",
    "command": "/qs fiyatı [fiyat]",
    "description": "Baktığın satış sandığındaki ürünün tane başı fiyatını değiştirir.",
    "category": "Sandık marketi"
  },
  {
    "id": "sky-043",
    "mode": "sky",
    "command": "/qs size [sayı]",
    "description": "Baktığın satış sandığındaki alış veya satış kapasitesini gösterir.",
    "category": "Sandık marketi"
  },
  {
    "id": "sky-044",
    "mode": "sky",
    "command": "/qs satın alma",
    "description": "Baktığın satış sandığını alış moduna geçirir.",
    "category": "Sandık marketi"
  },
  {
    "id": "sky-045",
    "mode": "sky",
    "command": "/qs satmak",
    "description": "Baktığın satış sandığını satış moduna geçirir.",
    "category": "Sandık marketi"
  },
  {
    "id": "sky-046",
    "mode": "sky",
    "command": "/qs staff add [nick]",
    "description": "Baktığın sandık marketine yetkili üye ekler.",
    "category": "Sandık marketi"
  },
  {
    "id": "sky-047",
    "mode": "sky",
    "command": "/qs staff kaldır [nick]",
    "description": "Baktığın sandık marketinden yetkili üyeyi çıkarır.",
    "category": "Sandık marketi"
  },
  {
    "id": "sky-048",
    "mode": "sky",
    "command": "/qs personel listesi",
    "description": "Sandık marketindeki yetkili üyelerin listesini görüntüler.",
    "category": "Sandık marketi"
  },
  {
    "id": "sky-049",
    "mode": "sky",
    "command": "/qs help",
    "description": "Diğer sandık marketi komutlarını gösterir.",
    "category": "Sandık marketi"
  },
  {
    "id": "sky-050",
    "mode": "sky",
    "command": "/ah",
    "description": "Oyuncu pazarına (sanal market) hızlı şekilde erişmeni sağlar.",
    "category": "Oyuncu pazarı"
  },
  {
    "id": "sky-051",
    "mode": "sky",
    "command": "/ah sell [miktar]",
    "description": "Elinde tuttuğun ürünü belirttiğin fiyattan oyuncu pazarında satışa çıkarır.",
    "category": "Oyuncu pazarı"
  },
  {
    "id": "sky-052",
    "mode": "sky",
    "command": "/görev",
    "description": "Günlük görevlerini tamamlayıp hızlı bir şekilde sikke ve coinmarket'te harcayabileceğin coin kazanmanı sağlar.",
    "category": "Sistemler"
  },
  {
    "id": "sky-053",
    "mode": "sky",
    "command": "/pv [numara]",
    "description": "Sanal sandıklarına erişmeni sağlar (VIP olmayanlar sadece /pv 1 komutunu kullanabilir, VIP'ler bu hakkı artırabilir).",
    "category": "Sistemler"
  },
  {
    "id": "sky-054",
    "mode": "sky",
    "command": "/vipbilgi",
    "description": "VIP'ler hakkında oyun içerisinden genel bilgi edinmeni sağlar.",
    "category": "Sistemler"
  }
];
