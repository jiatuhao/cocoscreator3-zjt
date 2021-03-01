/****************************************************************************
Copyright (c) 2020 Xiamen Yaji Software Co., Ltd.

http://www.cocos2d-x.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
****************************************************************************/
#pragma once
#include "../RenderFlow.h"
namespace cc {
namespace pipeline {
class ForwardPipeline;
struct Light;
struct Camera;

class CC_DLL ShadowFlow : public RenderFlow {
public:
    ShadowFlow() = default;
    virtual ~ShadowFlow();

    static const RenderFlowInfo &getInitializeInfo();

    virtual bool initialize(const RenderFlowInfo &info) override;

    virtual void activate(RenderPipeline *pipeline) override;

    virtual void render(Camera *camera) override;

    virtual void destroy() override;

private:
    void clearShadowMap(Camera *camera);

    void resizeShadowMap(const Light *light, const uint width, const uint height) const;

    void initShadowFrameBuffer(ForwardPipeline *pipeline, const Light *light);

private:
    static RenderFlowInfo _initInfo;

    gfx::RenderPass *_renderPass = nullptr;

    vector<const Light *> _validLights;
};
} // namespace pipeline
} // namespace cc