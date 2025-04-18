# GPU跟CPU有什麼本質差異？
1. 3D遊戲的場景渲染基礎
2. 顯示卡對於現代3D遊戲的必要性

# GPU概述
### 1. GPU 跟 CPU 有什麼本質差異？

中央處理器 (CPU) 和圖形處理器 (GPU) 都是電腦中至關重要的處理單元，但它們在設計理念和擅長處理的任務上有著根本的不同：

- **設計目標：**
    
    - **CPU (Central Processing Unit)：** 其設計目標是通用性，旨在高效地處理各種不同類型的任務。它優化了單個或少數幾個複雜任務的執行速度，追求低延遲和高吞吐量。你可以把它想像成一位全能型的管理大師，能夠有條不紊地處理各種複雜的決策和控制工作。
    - **GPU (Graphics Processing Unit)：** 其設計目標是並行處理大量重複性的計算密集型任務，尤其是在圖形渲染方面。它擁有成百上千甚至更多的核心，可以同時處理許多簡單的計算。你可以把它想像成一個龐大的專業團隊，每個成員專注於執行簡單但大量的相同任務，以實現整體的高效率。
- **核心架構：**
    
    - **CPU：** 通常只有少量的強大核心（例如 4 核、8 核、16 核等），每個核心都非常複雜，具備強大的指令集和控制單元，能夠獨立完成複雜的邏輯運算和控制流程。
    - **GPU：** 擁有數量龐大的簡單核心（例如數百個、數千個），每個核心的功能相對簡單，但它們可以並行工作，同時處理大量數據。這種架構非常適合執行相同的操作在大量數據上的場景，例如處理圖像中的每個像素或 3D 模型中的每個頂點。
- **擅長處理的任務：**
    
    - **CPU：** 擅長處理需要複雜邏輯判斷、分支預測、循序執行的任務，例如作業系統的運行、程式的執行、AI 推理中的控制部分、物理引擎的複雜計算等。它在系統中扮演著指揮和協調的角色。
    - **GPU：** 擅長處理高度並行的計算密集型任務，尤其是在圖形渲染方面，例如處理幾何數據、紋理貼圖、光照計算、陰影渲染等。此外，GPU 在近年來也被廣泛應用於通用計算 (GPGPU)，例如科學計算、深度學習、加密貨幣挖礦等需要大量並行運算的領域。
- **記憶體存取：**
    
    - **CPU：** 通常擁有複雜的多層快取記憶體系統，用於快速存取頻繁使用的數據，以減少對主記憶體的依賴。
    - **GPU：** 通常擁有高頻寬的專用記憶體 (例如 GDDR6)，以快速傳輸大量的圖形數據。其記憶體存取模式更偏向於批量處理。

**總結來說，CPU 注重於處理複雜的單線程或少數線程任務，追求低延遲；而 GPU 注重於並行處理大量的簡單任務，追求高吞吐量。它們是互補的，在電腦系統中各司其職，共同協作。**

### 2. 3D 遊戲的場景渲染基礎

3D 遊戲的場景渲染是一個複雜的過程，但其基礎可以概括為以下幾個關鍵步驟：

- **幾何建模 (Geometry Modeling)：** 遊戲世界中的所有物體，包括角色、建築、地形等，都是由稱為「網格 (Mesh)」的數學模型構成的。網格由大量的三角形（或其他多邊形）組成，每個三角形都由頂點 (Vertex) 定義，頂點包含了位置、法線 (Normal，用於計算光照方向)、紋理座標 (Texture Coordinates，用於貼圖) 等資訊。
    
- **視圖轉換 (View Transformation)：** 為了在 2D 螢幕上呈現 3D 世界，首先需要將 3D 場景中的所有物體從世界座標系轉換到相機（或觀察者）的視圖座標系。這個過程涉及到平移和旋轉等矩陣運算。
    
- **投影轉換 (Projection Transformation)：** 接下來，將 3D 視圖座標轉換為 2D 的投影平面座標。這個過程模擬了人眼或相機的透視效果，使得遠處的物體看起來更小。常見的投影方式有透視投影 (Perspective Projection) 和正交投影 (Orthographic Projection)。
    
- **裁剪 (Clipping)：** 由於螢幕只能顯示一定範圍內的物體，因此需要將位於相機視野之外的幾何圖形裁剪掉，以提高渲染效率。
    
- **光柵化 (Rasterization)：** 這個步驟將 2D 的幾何圖形（通常是三角形）轉換為螢幕上的像素 (Pixel)。對於每個三角形，光柵化器會判斷哪些像素被這個三角形覆蓋，並為這些像素生成對應的片段 (Fragment)。每個片段都包含了其在螢幕上的位置以及從原始幾何圖形插值得到的各種屬性（例如顏色、紋理座標、深度值等）。
    
- **像素著色 (Pixel Shading)：** 這個步驟決定了每個片段最終在螢幕上顯示的顏色。像素著色器 (Pixel Shader) 是一個在 GPU 上運行的程式，它會根據片段的各種屬性（例如紋理顏色、光照資訊、材質屬性等）進行計算，輸出最終的像素顏色。這一步是實現各種視覺效果的關鍵，例如逼真的光照、陰影、反射、折射等。
    
- **紋理貼圖 (Texturing)：** 為了讓物體表面看起來更豐富和細緻，會將 2D 的紋理圖像「貼」到 3D 模型的表面上。在像素著色階段，會根據片段的紋理座標從紋理圖像中採樣顏色，並將其應用到最終的像素顏色計算中。
    
- **深度測試 (Depth Testing)：** 為了正確地顯示物體的遮擋關係，需要進行深度測試。每個像素都有一個深度值，表示其在 3D 空間中距離相機的遠近。在渲染每個像素時，會將其深度值與已經渲染在同一位置的像素的深度值進行比較，只有當新的像素更靠近相機時，才會覆蓋原來的像素。
    
- **混合 (Blending) 和其他後處理 (Post-processing)：** 最後，還可以進行一些混合操作（例如實現透明效果）以及各種後處理效果，例如模糊、銳化、色彩校正、抗鋸齒 (Anti-aliasing) 等，以進一步提升畫面的視覺品質。
    

**總之，3D 遊戲的場景渲染是一個將抽象的數學模型轉換為螢幕上可見圖像的複雜過程，涉及到幾何處理、轉換、光柵化和著色等多個階段。**

### 3. 顯示卡對於現代 3D 遊戲的必要性

對於現代 3D 遊戲來說，**獨立顯示卡（俗稱顯卡或 GPU）幾乎是絕對必要的。** 原因如下：

- **龐大的計算量：** 現代 3D 遊戲的畫面精緻度非常高，包含複雜的幾何模型、高解析度的紋理、逼真的光照和陰影效果，以及各種複雜的視覺特效。這些都需要大量的並行計算才能即時完成。
    
- **GPU 的優化架構：** 如前所述，GPU 的並行架構專為處理這類圖形渲染任務而設計，擁有成百上千的核心可以同時工作，高效地完成大量的頂點處理和像素著色等計算。
    
- **專用的圖形硬體單元：** 現代顯示卡通常配備專用的硬體單元，例如紋理單元 (Texture Units)、光柵化單元 (Rasterization Units)、光線追蹤單元 (Ray Tracing Units) 等，這些硬體加速了特定的圖形渲染步驟，極大地提高了渲染效率。
    
- **高頻寬的專用記憶體：** 顯示卡擁有獨立的高速記憶體 (VRAM)，用於儲存大量的紋理數據、模型數據和幀緩衝區數據，避免了 CPU 和主記憶體之間的頻繁數據交換，提高了渲染效率。
    
- **API 的支持：** 遊戲引擎和圖形 API（例如 DirectX、Vulkan、Metal）都是針對 GPU 的架構進行優化的，可以充分利用 GPU 的並行計算能力和硬體特性。
    

**如果沒有獨立顯示卡，而僅僅依靠 CPU 內建的集成顯示核心 (Integrated Graphics)，通常只能在非常低的畫質設定和解析度下運行一些較為簡單的 3D 遊戲，並且幀率會非常低，難以獲得流暢的遊戲體驗。對於現代的大型 3D 遊戲來說，集成顯示核心的性能遠遠不足以應付其複雜的渲染需求。**

**因此，對於追求良好遊戲體驗的玩家來說，擁有一張性能足夠的獨立顯示卡是至關重要的。顯示卡的性能直接決定了遊戲的畫面品質、流暢度和可玩性。**


# 遊戲渲染