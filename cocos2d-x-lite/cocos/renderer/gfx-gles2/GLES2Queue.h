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
#ifndef CC_GFXGLES2_QUEUE_H_
#define CC_GFXGLES2_QUEUE_H_

namespace cc {
namespace gfx {

class CC_GLES2_API GLES2Queue final : public Queue {
public:
    GLES2Queue(Device *device);
    ~GLES2Queue();

    friend class GLES2Device;

public:
    virtual bool initialize(const QueueInfo &info) override;
    virtual void destroy() override;
    virtual void submit(const CommandBuffer *const *cmdBuffs, uint count, Fence *fence) override;

private:
    uint _numDrawCalls = 0;
    uint _numInstances = 0;
    uint _numTriangles = 0;
};

} // namespace gfx
} // namespace cc

#endif
