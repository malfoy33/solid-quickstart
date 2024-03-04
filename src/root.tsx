// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
                        <fieldset>
                            <input id="e-item-1" class="radio-inline__input" type="radio" name="environment-radio" value="e-item-1"/>
                            <label class="radio-inline__label" for="e-item-1">
                                とても満足
                            </label>
                            <input id="e-item-2" class="radio-inline__input" type="radio" name="environment-radio" value="e-item-2"/>
                            <label class="radio-inline__label" for="e-item-2">
                                やや満足
                            </label>
                            <input id="e-item-3" class="radio-inline__input" type="radio" name="environment-radio" value="e-item-3"/>
                            <label class="radio-inline__label" for="e-item-3">
                                普通
                            </label>
                            <input id="e-item-4" class="radio-inline__input" type="radio" name="environment-radio" value="e-item-4"/>
                            <label class="radio-inline__label" for="e-item-4">
                                やや普通
                            </label>
                            <input id="e-item-5" class="radio-inline__input" type="radio" name="environment-radio" value="e-item-5"/>
                            <label class="radio-inline__label" for="e-item-5">
                                とても満足
                            </label>
                        </fieldset>
      </Body>
    </Html>
  );
}
