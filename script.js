
const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2.75,
});
const w = 7672;
const h = 2654;
const bounds = [[0, 0], [h, w]];
L.imageOverlay('images/map.png', bounds).addTo(map);
map.fitBounds(bounds);

// ========== 建立各分類 LayerGroup ==========
const layers = {
  historic: L.layerGroup().addTo(map),
  performance: L.layerGroup().addTo(map),
  outdoor: L.layerGroup().addTo(map),
  art: L.layerGroup().addTo(map),
  cluster: L.layerGroup().addTo(map),
  facility: L.layerGroup().addTo(map),
};


// ========== 導覽點標記區 ==========
L.marker([1413, 6505]).addTo(layers.historic).bindPopup('<strong>寶藏巖寺</strong>');
L.marker([1171, 6229]).addTo(layers.historic).bindPopup('<strong>信箱牆</strong>');
L.marker([1884, 4320]).addTo(layers.historic).bindPopup('<strong>山城廣場</strong>');
L.marker([1984, 2376]).addTo(layers.historic).addTo(layers.outdoor).bindPopup('<strong>邊境小屋</strong>');
L.marker([807, 4770]).addTo(layers.historic).bindPopup('<strong>涼棚</strong>');
L.marker([821, 4050]).addTo(layers.historic).bindPopup('<strong>家庭電影院</strong>');
L.marker([904, 5126]).addTo(layers.historic).bindPopup('<strong>寶村柑仔店</strong>');
L.marker([928, 2348]).addTo(layers.historic).bindPopup('<strong>歷史斷面</strong>');
L.marker([1171, 2220]).addTo(layers.historic).bindPopup('<strong>麵引子</strong>');
L.marker([1746, 2820]).addTo(layers.historic).bindPopup('<strong>上光巷</strong>');
L.marker([1368, 3098]).addTo(layers.historic).addTo(layers.performance).bindPopup('<strong>防空洞</strong>');
L.marker([1004, 3634]).addTo(layers.historic).addTo(layers.outdoor).bindPopup('<strong>蓄水池</strong>');
L.marker([1160, 3750]).addTo(layers.historic).bindPopup('<strong>機槍堡</strong>');
L.marker([1204, 4198]).addTo(layers.historic).addTo(layers.outdoor).bindPopup('<strong>半樓廣場</strong>');
L.marker([1628, 4998]).addTo(layers.historic).bindPopup('<strong>十字廣場</strong>');
L.marker([1359, 5967]).addTo(layers.historic).bindPopup('<strong>萬新車站</strong>');
L.marker([1460, 6110]).addTo(layers.historic).bindPopup('<strong>29菜園</strong>');
L.marker([1224, 5321]).addTo(layers.facility).bindPopup('<strong>三角窗服務站</strong>');
L.marker([1487, 4810]).addTo(layers.performance).bindPopup('<strong>十字藝廊</strong>');
L.marker([1412, 2388]).addTo(layers.performance).bindPopup('<strong>邊境71展間</strong>');
L.marker([1240, 2496]).addTo(layers.performance).bindPopup('<strong>邊境52/54</strong>');
L.marker([1870, 3048]).addTo(layers.performance).bindPopup('<strong>邊境09展間</strong>');
L.marker([1858, 2906]).addTo(layers.performance).bindPopup('<strong>邊境11展間</strong>');
L.marker([1876, 2758]).addTo(layers.performance).bindPopup('<strong>邊境13展間</strong>');
L.marker([1202, 3336]).addTo(layers.performance).bindPopup('<strong>40號展間</strong>');
L.marker([1392, 3396]).addTo(layers.performance).bindPopup('<strong>轉角2號</strong>');
L.marker([1628, 4036]).addTo(layers.performance).bindPopup('<strong>山城53展間</strong>');
L.marker([1384, 4092]).addTo(layers.performance).bindPopup('<strong>創藝小客廳</strong>');
L.marker([1783, 5173]).addTo(layers.art).bindPopup('<strong>你很性感 但是 我不明白</strong>');
L.marker([1766, 5326]).addTo(layers.art).bindPopup('<strong>佛球女、槓桿街與石碧潭</strong>');
L.marker([1828, 2616]).addTo(layers.art).bindPopup('<strong>幸運餅乾</strong>');
L.marker([1332, 2318]).addTo(layers.art).bindPopup('<strong>隱藏劇情</strong>');
L.marker([1540, 5112]).addTo(layers.cluster).bindPopup('<strong>秋紅肚房X三貓俱樂部</strong>');
L.marker([1040, 3240]).addTo(layers.cluster).bindPopup('<strong>多磨工作室</strong>');
L.marker([1806, 5093]).addTo(layers.cluster).bindPopup('<strong>其他的事</strong>');
L.marker([1895, 5095]).addTo(layers.cluster).bindPopup('<strong>51門</strong>');
L.marker([1812, 5003]).addTo(layers.cluster).bindPopup('<strong>周靈芝創作工作室</strong>');
L.marker([1923, 4119]).addTo(layers.cluster).bindPopup('<strong>陳治旭工藝美術創作</strong>');
L.marker([1926, 4040]).addTo(layers.cluster).bindPopup('<strong>Kjohn 的再生軍團</strong>');
L.marker([1554, 3875]).addTo(layers.cluster).bindPopup('<strong>Mechanman Lab</strong>');
L.marker([1831, 3713]).addTo(layers.cluster).bindPopup('<strong>不歸鹿</strong>');
L.marker([1340, 3701]).addTo(layers.cluster).bindPopup('<strong>尖蚪</strong>');
L.marker([1406, 2636]).addTo(layers.cluster).bindPopup('<strong>Kaomin Studio</strong>');
L.marker([1142, 4442]).addTo(layers.facility).bindPopup('<strong>哺集乳室</strong>');
L.marker([1144, 4368]).addTo(layers.facility).bindPopup('<strong>飲水機</strong>');
L.marker([808, 3880]).addTo(layers.facility).bindPopup('<strong>廁所</strong>');
L.marker([1200, 3184]).addTo(layers.facility).bindPopup('<strong>廁所</strong>');
L.marker([2036, 3788]).addTo(layers.facility).bindPopup('<strong>廁所</strong>');
L.marker([1920, 3960]).addTo(layers.facility).bindPopup('<strong>廁所</strong>');
L.marker([1734, 5009]).addTo(layers.facility).bindPopup('<strong>廁所</strong>');
L.marker([1734, 5085]).addTo(layers.facility).bindPopup('<strong>廁所</strong>');







// ========== 導覽點標記區（含 Notion 連結） ==========
L.marker([1413, 6505]).addTo(layers.historic).bindPopup('<strong>寶藏巖寺</strong><br><a href="https://www.notion.so/1d0f1481438b80c48ea0e20b344327af" target="_blank">查看介紹</a>');
L.marker([1171, 6229]).addTo(layers.historic).bindPopup('<strong>信箱牆</strong><br><a href="https://www.notion.so/1d0f1481438b8048bdb5e1a2e3fc5ebe" target="_blank">查看介紹</a>');
L.marker([1884, 4320]).addTo(layers.historic).bindPopup('<strong>山城廣場</strong><br><a href="https://www.notion.so/1d1f1481438b80a18c2ac431dc5d68ac" target="_blank">查看介紹</a>');
L.marker([1984, 2376]).addTo(layers.historic).addTo(layers.outdoor).bindPopup('<strong>邊境小屋</strong><br><a href="https://www.notion.so/1d1f1481438b8088a7a1e1786fab93e1" target="_blank">查看介紹</a>');
L.marker([807, 4770]).addTo(layers.historic).bindPopup('<strong>涼棚</strong><br><a href="https://www.notion.so/1d0f1481438b80aeb37ec8af587bb96e" target="_blank">查看介紹</a>');
L.marker([821, 4050]).addTo(layers.historic).bindPopup('<strong>家庭電影院</strong><br><a href="https://www.notion.so/1d0f1481438b806d907ac4d353b4f446" target="_blank">查看介紹</a>');
L.marker([904, 5126]).addTo(layers.historic).bindPopup('<strong>寶村柑仔店</strong><br><a href="https://www.notion.so/1d0f1481438b808aa6f0cd908a5e7175" target="_blank">查看介紹</a>');
L.marker([928, 2348]).addTo(layers.historic).bindPopup('<strong>歷史斷面</strong><br><a href="https://www.notion.so/1d0f1481438b801282dbdbcaae09cb59" target="_blank">查看介紹</a>');
L.marker([1171, 2220]).addTo(layers.historic).bindPopup('<strong>麵引子</strong><br><a href="https://www.notion.so/1d0f1481438b807e90eec477d200ff87" target="_blank">查看介紹</a>');
L.marker([1746, 2820]).addTo(layers.historic).bindPopup('<strong>上光巷</strong><br><a href="https://www.notion.so/1d0f1481438b808fb76dde639e959f05" target="_blank">查看介紹</a>');
L.marker([1368, 3098]).addTo(layers.historic).addTo(layers.performance).bindPopup('<strong>防空洞</strong><br><a href="https://www.notion.so/1d0f1481438b80acb886ec254b5ac4b7" target="_blank">查看介紹</a>');
L.marker([1004, 3634]).addTo(layers.historic).addTo(layers.outdoor).bindPopup('<strong>蓄水池</strong><br><a href="https://www.notion.so/1d0f1481438b803d85f3e12927b6b9ed" target="_blank">查看介紹</a>');
L.marker([1160, 3750]).addTo(layers.historic).bindPopup('<strong>機槍堡</strong><br><a href="https://www.notion.so/1d0f1481438b80118e76ee0ea88b1393" target="_blank">查看介紹</a>');
L.marker([1204, 4198]).addTo(layers.historic).addTo(layers.outdoor).bindPopup('<strong>半樓廣場</strong><br><a href="https://www.notion.so/1d0f1481438b80268b6fe9daf0dfa220" target="_blank">查看介紹</a>');
L.marker([1628, 4998]).addTo(layers.historic).bindPopup('<strong>十字廣場</strong><br><a href="https://www.notion.so/1d0f1481438b807ebca5fb1f4fc6abcf?pvs=4" target="_blank">查看介紹</a>');
L.marker([1359, 5967]).addTo(layers.historic).bindPopup('<strong>萬新車站</strong><br><a href="https://www.notion.so/1d0f1481438b80a19da4efff0ea9d240" target="_blank">查看介紹</a>');
L.marker([1460, 6110]).addTo(layers.historic).bindPopup('<strong>29菜園</strong><br><a href="https://www.notion.so/29-1d0f1481438b80dd9901fae8473d92b5" target="_blank">查看介紹</a>');
L.marker([1224, 5321]).addTo(layers.facility).bindPopup('<strong>三角窗服務站</strong><br><a href="https://www.notion.so/1d0f1481438b80eb8600f2f61c6891b7" target="_blank">查看介紹</a>');
L.marker([1487, 4810]).addTo(layers.performance).bindPopup('<strong>十字藝廊</strong><br><a href="https://www.notion.so/1d0f1481438b809db86dee8da6da4e1e" target="_blank">查看介紹</a>');
L.marker([1412, 2388]).addTo(layers.performance).bindPopup('<strong>邊境71展間</strong><br><a href="https://www.notion.so/71-1d1f1481438b80298b25ea3f9b52b7c6" target="_blank">查看介紹</a>');
L.marker([1240, 2496]).addTo(layers.performance).bindPopup('<strong>邊境52/54</strong><br><a href="https://www.notion.so/52-54-1d1f1481438b80e792e9c90008883f77" target="_blank">查看介紹</a>');
L.marker([1870, 3048]).addTo(layers.performance).bindPopup('<strong>邊境09展間</strong><br><a href="https://www.notion.so/09-1d1f1481438b80d6b75be320335a3067" target="_blank">查看介紹</a>');
L.marker([1858, 2906]).addTo(layers.performance).bindPopup('<strong>邊境11展間</strong><br><a href="https://www.notion.so/11-1d1f1481438b80c98d11df6ff9b09e30" target="_blank">查看介紹</a>');
L.marker([1876, 2758]).addTo(layers.performance).bindPopup('<strong>邊境13展間</strong><br><a href="https://www.notion.so/13-1d1f1481438b800e9016cc77b9d45944" target="_blank">查看介紹</a>');
L.marker([1202, 3336]).addTo(layers.performance).bindPopup('<strong>40號展間</strong><br><a href="https://www.notion.so/40-1d1f1481438b80a18ff3d77bf4b5f45e" target="_blank">查看介紹</a>');
L.marker([1392, 3396]).addTo(layers.performance).bindPopup('<strong>轉角2號</strong><br><a href="https://www.notion.so/2-1d1f1481438b80f2ab2fd702de631542" target="_blank">查看介紹</a>');
L.marker([1628, 4036]).addTo(layers.performance).bindPopup('<strong>山城53展間</strong><br><a href="https://www.notion.so/53-1d1f1481438b8055baf8fec8eb2b101c" target="_blank">查看介紹</a>');
L.marker([1384, 4092]).addTo(layers.performance).bindPopup('<strong>創藝小客廳</strong><br><a href="https://www.notion.so/1d1f1481438b80c38446f6d39ac084ec" target="_blank">查看介紹</a>');
L.marker([1783, 5173]).addTo(layers.art).bindPopup('<strong>你很性感 但是 我不明白</strong><br><a href="https://www.notion.so/1d0f1481438b8020a8c9d0b01325ba49?pvs=4" target="_blank">查看介紹</a>');
L.marker([1766, 5326]).addTo(layers.art).bindPopup('<strong>佛球女、槓桿街與石碧潭</strong><br><a href="https://www.notion.so/1d0f1481438b80ddbfb0ce7ed9a1f077" target="_blank">查看介紹</a>');
L.marker([1828, 2616]).addTo(layers.art).bindPopup('<strong>幸運餅乾</strong><br><a href="https://www.notion.so/Fortune-Cookiss-1d0f1481438b80c1acecd1da88e8ed63" target="_blank">查看介紹</a>');
L.marker([1540, 5112]).addTo(layers.cluster).bindPopup('<strong>秋紅肚房X三貓俱樂部</strong><br><a href="https://www.notion.so/1d0f1481438b808aa6f0cd908a5e7175" target="_blank">查看介紹</a>');
L.marker([1040, 3240]).addTo(layers.cluster).bindPopup('<strong>多磨</strong><br><a href="https://www.notion.so/1d1f1481438b80d69799f6db529d0bbd" target="_blank">查看介紹</a>');

// ✅ 建立 marker（此部分會略過，在下一步加入）

// ✅ 分類顯示控制
window.showCategory = function (cat) {
  for (const key in layers) {
    if (cat === 'all' || cat === key) {
      map.addLayer(layers[key]);
    } else {
      map.removeLayer(layers[key]);
    }
  }
};
showCategory('all');

// ✅ 點擊顯示座標
map.on('click', function(e) {
  const lat = Math.round(e.latlng.lat);
  const lng = Math.round(e.latlng.lng);
  alert(`你點的位置是：\nY = ${lat}（上下）\nX = ${lng}（左右）`);
});

// ✅ GPS 定位功能
let userMarker = null;
let accuracyCircle = null;
let firstFix = true;

function gpsToMap(lat, lng) {
  const y = 636787.45 * lat - 15925085.19;
  const x = 3087656.01 * lng - 375245314.52;
  return [y, x];
}

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    function(position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const accuracy = position.coords.accuracy;
      const [y, x] = gpsToMap(lat, lng);

      if (userMarker) {
        userMarker.setLatLng([y, x]);
        accuracyCircle.setLatLng([y, x]);
        accuracyCircle.setRadius(accuracy);
      } else {
        userMarker = L.circleMarker([y, x], {
          radius: 8,
          color: '#007bff',
          fillColor: '#3399ff',
          fillOpacity: 1,
          weight: 2
        }).addTo(map).bindPopup("📍 你在這裡");

        accuracyCircle = L.circle([y, x], {
          radius: accuracy,
          color: 'blue',
          fillColor: '#30f',
          fillOpacity: 0.15
        }).addTo(map);

        if (firstFix) {
          map.setView([y, x], 1);
          firstFix = false;
        }
      }
    },
    function(error) {
      alert("⚠️ 無法取得你的位置，請開啟定位功能或允許瀏覽器位置權限");
    },
    {
      enableHighAccuracy: true,
      maximumAge: 1000,
      timeout: 10000
    }
  );
} else {
  alert("你的瀏覽器不支援 GPS 追蹤");
}
